USE vite_gourmand;

INSERT INTO roles (name) VALUES
('utilisateur'),
('employe'),
('administrateur');

INSERT INTO users (role_id, name, email, phone, password_hash)
SELECT roles.id, 'Admin Vite & Gourmand', 'admin@vitegourmand.fr', '05 56 88 42 10', '$2b$12$lawhf0wfdAftAFqzk7p52e3Zc2AsFz7f5n4JPiOK3ER8LfgszN9VW'
FROM roles
WHERE roles.name = 'administrateur';

INSERT INTO users (role_id, name, email, phone, password_hash)
SELECT roles.id, 'Lucas Bernard', 'lucas@demo.fr', '05 56 00 11 22', '$2b$12$lawhf0wfdAftAFqzk7p52e3Zc2AsFz7f5n4JPiOK3ER8LfgszN9VW'
FROM roles
WHERE roles.name = 'employe';

INSERT INTO users (role_id, name, email, phone, password_hash)
SELECT roles.id, 'Claire Martin', 'claire@demo.fr', '06 12 34 56 78', '$2b$12$lawhf0wfdAftAFqzk7p52e3Zc2AsFz7f5n4JPiOK3ER8LfgszN9VW'
FROM roles
WHERE roles.name = 'utilisateur';

INSERT INTO allergens (name) VALUES
('Gluten'), ('Lait'), ('Sulfites'), ('Fruits a coque'), ('Sesame'), ('Oeufs'), ('Soja');

INSERT INTO menus (slug, title, theme, diet, price, min_people, stock, description, long_description, conditions) VALUES
('menu-signature-bordeaux', 'Signature Bordelaise', 'Mariage', 'Classique', 48.00, 20, 140, 'Menu elegant inspire du Sud-Ouest.', 'Produits locaux, cuissons maitrisees et dressage haut de gamme.', 'Commande 7 jours a l avance.'),
('menu-vegetal-chic', 'Vegetal Chic', 'Entreprise', 'Vegetarien', 34.00, 10, 90, 'Proposition vegetarienne contemporaine.', 'Legumes de saison, cereales completes et sauces maison.', 'Commande 72h a l avance.'),
('menu-cocktail-prestige', 'Cocktail Prestige', 'Cocktail', 'Sans porc', 39.00, 25, 180, 'Pieces cocktail salees et sucrees.', 'Bouchees elegantes pour evenements debout.', 'Minimum 25 personnes.'),
('menu-famille-gourmande', 'Famille Gourmande', 'Anniversaire', 'Classique', 29.00, 8, 75, 'Menu chaleureux pour fetes familiales.', 'Recettes rassurantes et portions genereuses.', 'Retrait atelier possible.'),
('menu-vegan-atlantic', 'Vegan Atlantic', 'Seminaire', 'Vegan', 37.00, 12, 60, 'Menu vegan premium.', 'Cuisine vegetale et produits de saison.', 'Commande 5 jours a l avance.'),
('menu-brunch-elegant', 'Brunch Elegant', 'Brunch', 'Halal', 32.00, 15, 100, 'Brunch traiteur premium.', 'Viennoiseries, mets sales et fruits frais.', 'Livraison le matin.');

INSERT INTO menu_images (menu_id, url, alt_text, position)
SELECT id, 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80', title, 0 FROM menus;

INSERT INTO dishes (name) VALUES
('Canapes au magret fume'), ('Filet de volaille sauce graves'), ('Entremets chocolat noisette'),
('Houmous betterave'), ('Risotto aux champignons'), ('Tartelette citron basilic'),
('Mini tatins de legumes'), ('Brochettes gambas'), ('Macarons de saison'),
('Planche aperitive'), ('Parmentier de canard'), ('Moelleux chocolat'),
('Curry de pois chiches'), ('Taboule herbes fraiches'), ('Panna cotta coco mangue'),
('Mini viennoiseries'), ('Oeufs brouilles'), ('Salade de fruits frais');

INSERT INTO menu_dishes (menu_id, dish_id)
SELECT m.id, d.id FROM menus m JOIN dishes d
WHERE (m.slug = 'menu-signature-bordeaux' AND d.name IN ('Canapes au magret fume','Filet de volaille sauce graves','Entremets chocolat noisette'))
   OR (m.slug = 'menu-vegetal-chic' AND d.name IN ('Houmous betterave','Risotto aux champignons','Tartelette citron basilic'))
   OR (m.slug = 'menu-cocktail-prestige' AND d.name IN ('Mini tatins de legumes','Brochettes gambas','Macarons de saison'))
   OR (m.slug = 'menu-famille-gourmande' AND d.name IN ('Planche aperitive','Parmentier de canard','Moelleux chocolat'))
   OR (m.slug = 'menu-vegan-atlantic' AND d.name IN ('Curry de pois chiches','Taboule herbes fraiches','Panna cotta coco mangue'))
   OR (m.slug = 'menu-brunch-elegant' AND d.name IN ('Mini viennoiseries','Oeufs brouilles','Salade de fruits frais'));

INSERT INTO dish_allergens (dish_id, allergen_id)
SELECT d.id, a.id FROM dishes d JOIN allergens a
WHERE (d.name LIKE '%chocolat%' AND a.name IN ('Lait', 'Oeufs'))
   OR (d.name LIKE '%viennoiseries%' AND a.name IN ('Gluten', 'Lait'))
   OR (d.name LIKE '%Risotto%' AND a.name IN ('Lait'))
   OR (d.name LIKE '%Houmous%' AND a.name IN ('Sesame'));

INSERT INTO orders (reference, menu_id, customer_name, customer_email, delivery_address, event_date, event_time, people, subtotal, delivery_fee, discount, total, status)
SELECT 'VG-2026-001', id, 'Claire Martin', 'claire@demo.fr', '18 cours de l Intendance, Bordeaux', '2026-06-18', '19:30', 42, 2016, 0, 201.60, 1814.40, 'accepte'
FROM menus WHERE slug = 'menu-signature-bordeaux';

INSERT INTO order_status_history (order_id, status)
SELECT id, status FROM orders;

INSERT INTO reviews (author, rating, event_type, content, status) VALUES
('Elodie P.', 5, 'Mariage', 'Presentation impeccable, equipe souriante et cuisine memorable.', 'valide'),
('Marc D.', 5, 'Seminaire', 'Ponctualite, qualite des produits et gestion parfaite des regimes.', 'valide'),
('Paul A.', 5, 'Cocktail', 'Service fluide, bouchees raffinees et bon accompagnement.', 'en attente');

INSERT INTO opening_hours (day_name, open_time, close_time, closed) VALUES
('lundi', '09:00', '18:00', false),
('mardi', '09:00', '18:00', false),
('mercredi', '09:00', '18:00', false),
('jeudi', '09:00', '18:00', false),
('vendredi', '09:00', '18:00', false),
('samedi', '10:00', '16:00', false),
('dimanche', NULL, NULL, true);
