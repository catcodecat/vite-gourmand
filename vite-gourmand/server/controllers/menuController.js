import { query } from '../config/mysql.js'
import { requireFields } from '../utils/validators.js'

function toFrontMenu(row) {
  return {
    id: row.slug,
    title: row.title,
    theme: row.theme,
    diet: row.diet,
    price: Number(row.price),
    minPeople: row.min_people,
    stock: row.stock,
    description: row.description,
    longDescription: row.long_description,
    conditions: row.conditions,
    allergens: row.allergens ? row.allergens.split('|') : [],
    dishes: row.dishes ? row.dishes.split('|') : [],
    images: row.images ? row.images.split('|') : []
  }
}

async function fetchMenus(where = '', params = []) {
  const rows = await query(
    `SELECT menus.*,
      GROUP_CONCAT(DISTINCT menu_images.url ORDER BY menu_images.position SEPARATOR '|') AS images,
      GROUP_CONCAT(DISTINCT dishes.name ORDER BY dishes.id SEPARATOR '|') AS dishes,
      GROUP_CONCAT(DISTINCT allergens.name ORDER BY allergens.name SEPARATOR '|') AS allergens
     FROM menus
     LEFT JOIN menu_images ON menu_images.menu_id = menus.id
     LEFT JOIN menu_dishes ON menu_dishes.menu_id = menus.id
     LEFT JOIN dishes ON dishes.id = menu_dishes.dish_id
     LEFT JOIN dish_allergens ON dish_allergens.dish_id = dishes.id
     LEFT JOIN allergens ON allergens.id = dish_allergens.allergen_id
     ${where}
     GROUP BY menus.id
     ORDER BY menus.created_at DESC`,
    params
  )
  return rows.map(toFrontMenu)
}

export async function listMenus(req, res) {
  const filters = []
  const params = []
  if (req.query.maxPrice) {
    filters.push('menus.price <= ?')
    params.push(Number(req.query.maxPrice))
  }
  if (req.query.minPrice) {
    filters.push('menus.price >= ?')
    params.push(Number(req.query.minPrice))
  }
  if (req.query.theme) {
    filters.push('menus.theme = ?')
    params.push(req.query.theme)
  }
  if (req.query.diet) {
    filters.push('menus.diet = ?')
    params.push(req.query.diet)
  }
  if (req.query.people) {
    filters.push('menus.min_people <= ?')
    params.push(Number(req.query.people))
  }
  const where = filters.length ? `WHERE ${filters.join(' AND ')}` : ''
  res.json(await fetchMenus(where, params))
}

export async function getMenu(req, res) {
  const menus = await fetchMenus('WHERE menus.slug = ?', [req.params.id])
  if (!menus.length) return res.status(404).json({ message: 'Menu introuvable' })
  res.json(menus[0])
}

export async function createMenu(req, res) {
  requireFields(req.body, ['id', 'title', 'description', 'theme', 'diet', 'price', 'minPeople'])
  const result = await query(
    `INSERT INTO menus (slug, title, description, long_description, theme, diet, stock, conditions, price, min_people)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      req.body.id,
      req.body.title,
      req.body.description,
      req.body.longDescription || req.body.description,
      req.body.theme,
      req.body.diet,
      Number(req.body.stock || 0),
      req.body.conditions || '',
      Number(req.body.price),
      Number(req.body.minPeople)
    ]
  )
  await syncMenuRelations(result.insertId, req.body)
  res.status(201).json((await fetchMenus('WHERE menus.id = ?', [result.insertId]))[0])
}

export async function updateMenu(req, res) {
  const menus = await query('SELECT id FROM menus WHERE slug = ? LIMIT 1', [req.params.id])
  if (!menus.length) return res.status(404).json({ message: 'Menu introuvable' })
  await query(
    `UPDATE menus SET title = ?, description = ?, long_description = ?, theme = ?, diet = ?, stock = ?, conditions = ?, price = ?, min_people = ?
     WHERE id = ?`,
    [
      req.body.title,
      req.body.description,
      req.body.longDescription || req.body.description,
      req.body.theme,
      req.body.diet,
      Number(req.body.stock || 0),
      req.body.conditions || '',
      Number(req.body.price),
      Number(req.body.minPeople),
      menus[0].id
    ]
  )
  await syncMenuRelations(menus[0].id, req.body)
  res.json((await fetchMenus('WHERE menus.id = ?', [menus[0].id]))[0])
}

export async function deleteMenu(req, res) {
  await query('DELETE FROM menus WHERE slug = ?', [req.params.id])
  res.status(204).end()
}

async function syncMenuRelations(menuId, body) {
  await query('DELETE FROM menu_images WHERE menu_id = ?', [menuId])
  await query('DELETE FROM menu_dishes WHERE menu_id = ?', [menuId])

  for (const [index, url] of (body.images || []).entries()) {
    await query('INSERT INTO menu_images (menu_id, url, alt_text, position) VALUES (?, ?, ?, ?)', [menuId, url, body.title, index])
  }

  for (const dishName of body.dishes || []) {
    const existing = await query('SELECT id FROM dishes WHERE name = ? LIMIT 1', [dishName])
    const dishId = existing.length
      ? existing[0].id
      : (await query('INSERT INTO dishes (name) VALUES (?)', [dishName])).insertId
    await query('INSERT IGNORE INTO menu_dishes (menu_id, dish_id) VALUES (?, ?)', [menuId, dishId])
  }
}
