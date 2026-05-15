export const ORDER_STATUSES = [
  'en attente',
  'accepte',
  'en preparation',
  'en cours de livraison',
  'livre',
  'en attente du retour de materiel',
  'terminee',
  'annulee'
]

export const FRONT_STEPS = ['en attente', 'accepte', 'en preparation', 'livre', 'terminee']

export function calculateOrder(menu, people) {
  const validatedPeople = Math.max(Number(people), Number(menu.min_people))
  const subtotal = Number(menu.price) * validatedPeople
  const delivery = subtotal > 1200 ? 0 : 35
  const discount = subtotal * 0.1
  const total = subtotal + delivery - discount

  return { people: validatedPeople, subtotal, delivery, discount, total }
}
