-- Users
INSERT INTO users (username, email, password)
VALUES
('salman', 'salman.dev@sample.com', 'hashedpassword1'),
('essa', 'essa.khan@sample.com', 'hashedpassword2'),
('ahmed', 'ahmed@sample.com', 'hashedpassword3'),
('fatima', 'fatima@sample.com', 'hashedpassword4'),
('usman', 'usman@sample.com', 'hashedpassword5'),
('sana', 'sana@sample.com', 'hashedpassword6'),
('bilal', 'bilal@sample.com', 'hashedpassword7'),
('ayesha', 'ayesha@sample.com', 'hashedpassword8'),
('javed', 'javed@sample.com', 'hashedpassword9'),
('kiran', 'kiran@sample.com', 'hashedpassword10');

--user addresses
INSERT INTO user_addresses (user_id, address)
VALUES
(1, 'Street 1, Karachi'),
(2, 'Block A, Islamabad'),
(3, 'Flat 3B, Lahore'),
(4, 'Sector G, Peshawar'),
(5, 'House 22, Quetta'),
(6, 'Building 9, Multan'),
(7, 'Sector F-11, Islamabad'),
(8, 'Main Road, Rawalpindi'),
(9, 'Garden Town, Sialkot'),
(10, 'Phase 4, Faisalabad');

-- Seed Categories
INSERT INTO categories (category_name, category_description, image_url) VALUES
('Hamburger', 'restaurents specializing in burgers and sandwich-style meals.', 'https://cdn-icons-png.flaticon.com/128/3075/3075977.png'),
('Pizza', 'Pizzerias serving a variety of traditional and modern pizzas.', 'https://cdn-icons-png.flaticon.com/128/6978/6978255.png'),
('Noodle', 'Places offering Asian-style noodles and ramen.', 'https://cdn-icons-png.flaticon.com/128/3041/3041130.png'),
('Meat', 'Meat-heavy menus like BBQ, steak, and kebabs.', 'https://cdn-icons-png.flaticon.com/128/1046/1046769.png'),
('Vegetable', 'Vegetarian and plant-based focused cuisine.', 'https://cdn-icons-png.flaticon.com/128/2153/2153786.png'),
('Dessert', 'Dessert shops offering cakes, ice creams, and sweets.', 'https://cdn-icons-png.flaticon.com/128/4465/4465242.png'),
('Drink', 'Juice bars, cafes, and beverage-focused spots.', 'https://cdn-icons-png.flaticon.com/128/2405/2405479.png'),
('Bread', 'Bakeries offering fresh, handmade bread loaves and buns.', 'https://cdn-icons-png.flaticon.com/128/3014/3014502.png'),
('Croissant', 'Specialty patisseries offering croissants and French pastries.', 'https://cdn-icons-png.flaticon.com/128/5787/5787330.png'),
('Pancakes', 'Breakfast spots with pancakes, waffles, and syrup-heavy dishes.', 'https://cdn-icons-png.flaticon.com/128/8688/8688560.png'),
('Cheese', 'restaurents known for cheese-centric dishes and platters.', 'https://cdn-icons-png.flaticon.com/128/819/819827.png'),
('FrenchFries', 'Fries-focused fast food outlets and side dish experts.', 'https://cdn-icons-png.flaticon.com/128/5787/5787020.png');


-- Seed restaurents
INSERT INTO restaurents (restaurent_name, address, phone, email, category_id, image_url) VALUES
-- Category 1: Burgers
('Burger Republic', '101 Burger Lane', '0311-1111111', 'info@burgerrepublic.com', 1, 'https://www.pexels.com/photo/ham-burger-with-vegetables-1639557/'),
('Smash Grill', '102 Burger Lane', '0311-2222222', 'contact@smashgrill.com', 1, 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg'),
('Urban Bun', '103 Burger Lane', '0311-3333333', 'hello@urbanbun.com', 1, 'https://www.pexels.com/photo/tomato-burger-and-fried-fries-1600727/'),

-- Category 2: Pizza
('Pizza Haven', '202 Mozzarella St', '0312-2222222', 'order@pizzahaven.com', 2, 'https://images.pexels.com/photos/4109125/pexels-photo-4109125.jpeg'),
('Oven Slice', '203 Mozzarella St', '0312-3333333', 'contact@ovenslice.com', 2, 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'),
('Cheesy Crust', '204 Mozzarella St', '0312-4444444', 'info@cheesycrust.com', 2, 'https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg'),

-- Category 3: Asian/Noodles
('Noodle House', '303 Wok Way', '0313-3333333', 'hello@noodlehouse.com', 3, 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg'),
('Wok Express', '304 Wok Way', '0313-4444444', 'order@wokexpress.com', 3, 'https://www.pexels.com/photo/spicy-gravy-meatballs-15853316/'),
('Zen Bowl', '305 Wok Way', '0313-5555555', 'zen@zenbowl.com', 3, 'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg'),

-- Category 4: BBQ
('Meat Feast Grill', '404 BBQ Blvd', '0314-4444444', 'grill@meatfeast.com', 4, 'https://www.pexels.com/photo/grilled-meats-on-skewers-2233729/'),
('Smoky Bros', '405 BBQ Blvd', '0314-5555555', 'info@smokybros.com', 4, 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg'),
('BBQ Central', '406 BBQ Blvd', '0314-6666666', 'hello@bbqcentral.com', 4, 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg'),

-- Category 5: Vegetarian
('Green Leaf Bites', '505 Veggie Ave', '0315-5555555', 'support@greenleaf.com', 5, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'),
('Veggie Vibe', '506 Veggie Ave', '0315-6666666', 'info@veggievibe.com', 5, 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg'),
('Plant Plate', '507 Veggie Ave', '0315-7777777', 'hello@plantplate.com', 5, 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg'),

-- Category 6: Desserts
('Sweet Tooth', '606 Sugar St', '0316-6666666', 'contact@sweettooth.com', 6, 'https://www.pexels.com/photo/diced-buttermilk-cornbread-on-a-table-among-other-cakes-18852480/'),
('Cake Craft', '607 Sugar St', '0316-7777777', 'cake@cakecraft.com', 6, 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg'),
('Scoop Land', '608 Sugar St', '0316-8888888', 'icecream@scoopland.com', 6, 'https://www.pexels.com/photo/a-cup-of-oatmeal-with-chocolate-chips-and-nuts-27850076/'),

-- Category 7: Beverages
('Sip & Chill', '707 Beverage Rd', '0317-7777777', 'hello@sipnchill.com', 7, 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg'),
('Brew Station', '708 Beverage Rd', '0317-8888888', 'info@brewstation.com', 7, 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'),
('Smoothie Stop', '709 Beverage Rd', '0317-9999999', 'smoothie@smoothiestop.com', 7, 'https://www.pexels.com/photo/clear-glass-footed-drinking-glass-with-orange-juice-338713/'),

-- Category 8: Bakery
('Bread Box', '808 Loaf Street', '0318-8888888', 'info@breadbox.com', 8, 'https://images.pexels.com/photos/263168/pexels-photo-263168.jpeg'),
('Dough Delight', '809 Loaf Street', '0318-9999999', 'contact@doughdelight.com', 8, 'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg'),
('Bake Bliss', '810 Loaf Street', '0318-0000000', 'bake@bliss.com', 8, 'https://www.pexels.com/photo/man-preparing-dough-for-bread-3218467/'),

-- Category 9: French/Pastries
('Paris Bakes', '909 Croissant Blvd', '0319-9999999', 'paris@croissants.com', 9, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
('La Croissanterie', '910 Croissant Blvd', '0319-1111111', 'info@lacroissanterie.com', 9, 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'),
('French Toast Café', '911 Croissant Blvd', '0319-2222222', 'toast@frenchcafe.com', 9, 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg'),

-- Category 10: Pancakes
('Fluffy Stack', '1010 Pancake Plaza', '0320-0000000', 'fluffy@pancakestack.com', 10, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
('Pancake & Co.', '1011 Pancake Plaza', '0320-1111111', 'order@pancakeco.com', 10, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
('Stack House', '1012 Pancake Plaza', '0320-2222222', 'stack@stackhouse.com', 10, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),

-- Category 11: Cheese/Fondue
('Cheese Cave', '111 Cheddar Alley', '0321-1111111', 'melt@cheesecave.com', 11, 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg'),
('Melt Room', '112 Cheddar Alley', '0321-2222222', 'info@meltroom.com', 11, 'https://images.pexels.com/photos/1030986/pexels-photo-1030986.jpeg'),
('Cheddar Club', '113 Cheddar Alley', '0321-3333333', 'contact@cheddarclub.com', 11, 'https://www.pexels.com/photo/food-on-brown-board-2531189/'),

-- Category 12: Fast Food/Fries
('Fry Station', '1212 Crunchy Rd', '0322-2222222', 'fries@frystation.com', 12, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
('Crunch Basket', '1213 Crunchy Rd', '0322-3333333', 'order@crunchbasket.com', 12, 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
('Spud & Dip', '1214 Crunchy Rd', '0322-4444444', 'hello@spudndip.com', 12, 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg');



-- Seed Menu Items (aligned with each restaurent and category. resturant_id acting as a foreign key)


-- Burger Republic
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(1, 'Classic Beef Burger', 'Juicy beef patty with lettuce, tomato & cheese', 850, 'Burgers', 'Beef', 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'),
(1, 'Chicken Zinger Burger', 'Crispy chicken fillet with spicy mayo', 750, 'Burgers', 'Chicken', 'https://images.pexels.com/photos/1616746/pexels-photo-1616746.jpeg');

-- Smash Grill
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(2, 'Smash Double Cheeseburger', 'Two smashed patties with cheddar cheese', 950, 'Burgers', 'Double', 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg'),
(2, 'BBQ Smash Burger', 'Beef patty glazed with BBQ sauce & onion rings', 880, 'Burgers', 'BBQ', 'https://images.pexels.com/photos/4676406/pexels-photo-4676406.jpeg');

-- Urban Bun
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(3, 'Urban Special Burger', 'Grilled beef burger with special house sauce', 870, 'Burgers', 'Special', 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg'),
(3, 'Veggie Burger', 'Grilled veggies with cheddar in a multigrain bun', 720, 'Burgers', 'Veggie', 'https://images.pexels.com/photos/1600716/pexels-photo-1600716.jpeg');

-- 2 Pizza Haven
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(4, 'Margherita Pizza', 'Classic cheese & tomato sauce pizza', 900, 'Pizza', 'Cheese', 'https://images.pexels.com/photos/4109125/pexels-photo-4109125.jpeg'),
(4, 'Pepperoni Feast', 'Loaded with spicy pepperoni and mozzarella', 1050, 'Pizza', 'Pepperoni', 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg');

-- Oven Slice
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(5, 'BBQ Chicken Pizza', 'Grilled chicken with BBQ sauce & red onions', 1020, 'Pizza', 'BBQ', 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'),
(5, 'Veggie Supreme', 'Bell peppers, olives, onions, and mushrooms', 980, 'Pizza', 'Veggie', 'https://images.pexels.com/photos/159688/pizza-italian-pizza-restaurant-159688.jpeg');

-- Cheesy Crust
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(6, 'Cheesy Crust Deluxe', 'Extra cheese-stuffed crust with toppings', 1100, 'Pizza', 'Cheese', 'https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg'),
(6, 'Hot & Spicy Pizza', 'Spicy chicken, jalapenos, and chili flakes', 1080, 'Pizza', 'Spicy', 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg');

-- Noodle House
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(7, 'Chicken Chow Mein', 'Stir-fried noodles with chicken and veggies', 750, 'Asian', 'Noodles', 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg'),
(7, 'Beef Teriyaki Noodles', 'Udon noodles with beef in teriyaki sauce', 870, 'Asian', 'Beef', 'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg');

-- Wok Express
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(8, 'Kung Pao Chicken', 'Spicy chicken with peanuts & bell peppers', 820, 'Asian', 'Spicy', 'https://images.pexels.com/photos/15853316/pexels-photo-15853316.jpeg'),
(8, 'Vegetable Hakka Noodles', 'Wok-tossed noodles with mixed veggies', 700, 'Asian', 'Veggie', 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg');

-- Zen Bowl
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(9, 'Thai Basil Chicken Bowl', 'Spicy chicken over jasmine rice', 860, 'Asian', 'Thai', 'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg'),
(9, 'Tofu Stir Fry Bowl', 'Crispy tofu with seasonal stir-fried veggies', 740, 'Asian', 'Vegan', 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg');

-- Meat Feast Grill
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(10, 'Beef Seekh Kebab', 'Spicy minced beef skewers grilled to perfection', 890, 'BBQ', 'Beef', 'https://www.pexels.com/photo/grilled-meats-on-skewers-2233729/'),
(10, 'Mutton Chops', 'Chargrilled spiced mutton ribs', 1100, 'BBQ', 'Mutton', 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg');

-- Smoky Bros
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(11, 'Smoked Chicken Tikka', 'Tender chicken marinated in desi spices', 850, 'BBQ', 'Chicken', 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg'),
(11, 'Grilled Lamb Ribs', 'Slow-cooked lamb ribs glazed in BBQ sauce', 1150, 'BBQ', 'Lamb', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- BBQ Central
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(12, 'BBQ Platter', 'Mix of grilled chicken, beef & sausages', 1250, 'BBQ', 'Platter', 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg'),
(12, 'Charcoal Chicken Wings', 'BBQ chicken wings with smoky flavor', 780, 'BBQ', 'Chicken', 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg');

-- Green Leaf Bites
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(13, 'Grilled Veggie Wrap', 'Zucchini, peppers, and hummus in whole wheat wrap', 720, 'Vegetarian', 'Wrap', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'),
(13, 'Stuffed Bell Peppers', 'Peppers filled with rice, beans, and herbs', 760, 'Vegetarian', 'Healthy', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg');

-- Veggie Vibe
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(14, 'Avocado Salad Bowl', 'Fresh avocado with greens and lemon vinaigrette', 680, 'Vegetarian', 'Salad', 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg'),
(14, 'Chickpea Burger', 'Chickpea patty with tahini dressing', 700, 'Vegetarian', 'Burger', 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg');

-- Plant Plate
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(15, 'Tofu & Greens Stir Fry', 'Tofu sautéed with broccoli and spinach', 750, 'Vegetarian', 'Vegan', 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg'),
(15, 'Mushroom Pasta', 'Creamy pasta with wild mushrooms & herbs', 790, 'Vegetarian', 'Pasta', 'https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg');

-- Sweet Tooth
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(16, 'Chocolate Lava Cake', 'Molten chocolate cake with vanilla ice cream', 550, 'Desserts', 'Cake', 'https://www.pexels.com/photo/diced-buttermilk-cornbread-on-a-table-among-other-cakes-18852480/'),
(16, 'Mini Cheesecakes', 'Assorted bite-sized cheesecakes', 480, 'Desserts', 'Cheesecake', 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg');

-- Cake Craft
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(17, 'Strawberry Shortcake', 'Fluffy sponge with strawberry cream', 600, 'Desserts', 'Cake', 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg'),
(17, 'Chocolate Fudge Brownie', 'Rich chocolate brownie topped with nuts', 540, 'Desserts', 'Brownie', 'https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg');

-- Scoop Land
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(18, 'Belgian Chocolate Ice Cream', 'Dark chocolate ice cream with chips', 490, 'Desserts', 'Ice Cream', 'https://www.pexels.com/photo/a-cup-of-oatmeal-with-chocolate-chips-and-nuts-27850076/'),
(18, 'Mango Sundae', 'Creamy mango ice cream with toppings', 460, 'Desserts', 'Sundae', 'https://images.pexels.com/photos/1387819/pexels-photo-1387819.jpeg');

-- Sip & Chill
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(19, 'Iced Mocha', 'Chilled espresso with chocolate and cream', 480, 'Beverages', 'Coffee', 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg'),
(19, 'Mint Lemonade', 'Refreshing lemon drink with mint', 400, 'Beverages', 'Mocktail', 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg');

-- Brew Station
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(20, 'Cappuccino', 'Hot espresso with steamed milk foam', 420, 'Beverages', 'Coffee', 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'),
(20, 'Chai Latte', 'Spiced tea with creamy milk', 390, 'Beverages', 'Tea', 'https://images.pexels.com/photos/1667871/pexels-photo-1667871.jpeg');

-- Smoothie Stop
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(21, 'Berry Blast Smoothie', 'Mixed berries blended with yogurt & honey', 520, 'Beverages', 'Smoothie', 'https://www.pexels.com/photo/clear-glass-footed-drinking-glass-with-orange-juice-338713/'),
(21, 'Tropical Mango Smoothie', 'Mango, banana, and coconut blend', 500, 'Beverages', 'Smoothie', 'https://images.pexels.com/photos/247685/pexels-photo-247685.jpeg');

-- Bread Box
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(22, 'Sourdough Loaf', 'Crusty sourdough bread baked fresh daily', 350, 'Bakery', 'Bread', 'https://images.pexels.com/photos/263168/pexels-photo-263168.jpeg'),
(22, 'Garlic Buns', 'Soft buns with garlic and herbs', 280, 'Bakery', 'Buns', 'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg');

-- Dough Delight
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(23, 'Cinnamon Rolls', 'Warm, sticky cinnamon rolls topped with icing', 360, 'Bakery', 'Pastry', 'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg'),
(23, 'Croissants', 'Flaky buttery croissants fresh from oven', 300, 'Bakery', 'Croissant', 'https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg');

-- Bake Bliss
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(24, 'Banana Bread', 'Moist bread with banana chunks', 340, 'Bakery', 'Loaf', 'https://www.pexels.com/photo/man-preparing-dough-for-bread-3218467/'),
(24, 'Chocolate Muffins', 'Soft chocolate muffins with chips', 360, 'Bakery', 'Muffin', 'https://images.pexels.com/photos/3654599/pexels-photo-3654599.jpeg');

-- 9. Paris Bakes (Croissant)
-- Paris Bakes
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(25, 'French Macarons', 'Assorted macarons in various flavors', 650, 'Pastries', 'Macaron', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(25, 'Fruit Tart', 'Fresh fruits on a creamy custard tart', 680, 'Pastries', 'Tart', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg');

-- La Croissanterie
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(26, 'Almond Croissant', 'Butter croissant filled with almond paste', 580, 'Pastries', 'Croissant', 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'),
(26, 'Éclair', 'Choux pastry filled with cream & topped with chocolate', 600, 'Pastries', 'Eclair', 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg');

-- French Toast Café
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(27, 'Classic French Toast', 'Thick slices dipped in custard & fried', 590, 'Pastries', 'Toast', 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg'),
(27, 'Brioche with Jam', 'Soft brioche served with fruit jam', 560, 'Pastries', 'Brioche', 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg');

-- 10. Fluffy Stack (Pancakes)
-- Fluffy Stack
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(28, 'Blueberry Pancakes', 'Stacked pancakes with fresh blueberries', 640, 'Pancakes', 'Blueberry', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(28, 'Nutella Pancake Roll', 'Pancake roll filled with Nutella & banana', 680, 'Pancakes', 'Nutella', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- Pancake & Co.
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(29, 'Maple Syrup Pancakes', 'Golden pancakes drenched in maple syrup', 620, 'Pancakes', 'Maple', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(29, 'Chocolate Chip Pancakes', 'Pancakes with melty chocolate chips', 650, 'Pancakes', 'Choco', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- Stack House
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(30, 'Buttermilk Pancakes', 'Classic buttermilk pancake stack', 610, 'Pancakes', 'Classic', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(30, 'Berry & Cream Pancakes', 'Topped with strawberries, cream & syrup', 670, 'Pancakes', 'Berry', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- 11. Cheese Cave (Cheese)
-- Cheese Cave
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(31, 'Four Cheese Fondue', 'Swiss, cheddar, gouda, mozzarella mix', 950, 'Cheese', 'Fondue', 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg'),
(31, 'Mozzarella Sticks', 'Deep fried cheese sticks with dip', 580, 'Cheese', 'Snack', 'https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg');

-- Melt Room
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(32, 'Grilled Cheese Sandwich', 'Toasted bread with melty cheese', 620, 'Cheese', 'Sandwich', 'https://images.pexels.com/photos/1030986/pexels-photo-1030986.jpeg'),
(32, 'Baked Mac & Cheese', 'Macaroni in rich cheesy sauce', 700, 'Cheese', 'Pasta', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- Cheddar Club
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(33, 'Cheddar Nuggets', 'Crispy cheddar cheese bites', 560, 'Cheese', 'Snack', 'https://www.pexels.com/photo/food-on-brown-board-2531189/'),
(33, 'Jalapeno Cheese Bombs', 'Spicy cheese-filled jalapeno balls', 600, 'Cheese', 'Spicy', 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg');

-- 12. Fry Station (FrenchFries)
-- Fry Station
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(34, 'Loaded Fries', 'Fries topped with cheese, chicken & sauce', 520, 'Fast Food', 'Fries', 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
(34, 'Curly Fries', 'Crispy curly fries with spicy dip', 490, 'Fast Food', 'Fries', 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg');

-- Crunch Basket
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(35, 'Crispy Chicken Tenders', 'Golden fried chicken strips', 620, 'Fast Food', 'Chicken', 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
(35, 'Crinkle Fries', 'Crinkle cut fries with cheesy sauce', 480, 'Fast Food', 'Fries', 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg');

-- Spud & Dip
INSERT INTO menu_items (restaurent_id, name, description, price, category, tag, image_url) VALUES
(36, 'Masala Fries', 'Spicy fries with masala seasoning', 500, 'Fast Food', 'Spicy', 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg'),
(36, 'Cheesy Potato Bites', 'Mini fried potato cheese balls', 530, 'Fast Food', 'Cheese', 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg');



-- Seed restaurent Customers
INSERT INTO restaurent_customers (restaurent_id, name, email, phone) VALUES
(1, 'Ali Khan', 'ali.khan@example.com', '0300-1234567'),
(2, 'Sara Ahmed', 'sara.ahmed@example.com', '0301-2345678'),
(3, 'John Doe', 'john.doe@example.com', '0302-3456789');

-- Seed Orders
-- Seed orders
INSERT INTO orders (user_id, restaurent_id, address_id, total_amount, delivery_fee, payment_method, status)
VALUES
(1, 1, 1, 2500.00, 150.00, 'Cash on Delivery', 'Pending'),
(2, 3, 2, 1800.00, 150.00, 'Credit Card', 'Confirmed'),
(3, 2, 3, 950.00, 150.00, 'Easypaisa', 'Completed'),
(1, 4, 1, 1100.00, 150.00, 'JazzCash', 'Pending'),
(4, 5, 4, 2890.00, 150.00, 'Cash on Delivery', 'Shipped');



--seed rating
INSERT INTO rating (restaurent_id, user_id, stars, reviews)
VALUES
(1, 1, 5, 'Amazing food and great ambiance.'),
(2, 2, 4, 'Delicious meals and quick service.'),
(3, 3, 3, 'Good taste but a bit pricey.'),
(4, 4, 4, 'Tasty and fresh. Will visit again.'),
(5, 5, 2, 'Service was slow, food was average.'),
(6, 6, 5, 'Absolutely loved it!'),
(7, 7, 3, 'Decent experience overall.'),
(8, 8, 4, 'Yummy burgers and clean place.'),
(9, 9, 5, 'Top-notch experience!'),
(10, 10, 4, 'Very satisfying meal.'),
(11, 1, 5, 'Perfect place for a quick bite.'),
(12, 2, 2, 'Not worth the hype.'),
(13, 3, 3, 'Okayish experience.'),
(14, 4, 4, 'Pretty good overall.'),
(15, 5, 1, 'Very disappointing.'),
(16, 6, 5, 'Highly recommended!'),
(17, 7, 4, 'Impressive flavors.'),
(18, 8, 3, 'Needs improvement.'),
(19, 9, 5, 'Five stars easily.'),
(20, 10, 4, 'Nice environment and good food.'),
(21, 1, 4, 'Liked the atmosphere.'),
(22, 2, 3, 'Average but okay.'),
(23, 3, 2, 'Not very clean.'),
(24, 4, 5, 'One of the best meals I’ve had.'),
(25, 5, 3, 'Just alright.'),
(26, 6, 4, 'Well-prepared dishes.'),
(27, 7, 5, 'Exceptional taste and service.'),
(28, 8, 4, 'Will recommend to friends.'),
(29, 9, 2, 'Too salty and overpriced.'),
(30, 10, 3, 'Neither good nor bad.'),
(31, 1, 4, 'Tried for the first time, liked it.'),
(32, 2, 5, 'Outstanding!'),
(33, 3, 4, 'Very fulfilling.'),
(34, 4, 3, 'Could be better.'),
(35, 5, 2, 'Overcooked meals.'),
(36, 6, 5, 'Perfect dining experience!');

