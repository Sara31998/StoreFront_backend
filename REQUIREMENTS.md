# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders

- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### User

- id
- firstName
- lastName
- password
- email
- user name

#### Orders

- id
- quantity of each product in the order
- user_id reference to the id of userd
- status of order (active or complete)

#### Products

- name of product
- descound if found
- brand od product
- category of product
- price of product
- id of product

#### product order

- id of the order
- id of the product

### End point of user

id = 1
user_name: 'sara4067', // user name
first_name: 'Sara', // first name
last_name: 'Gamal', // last name
your_email: 'sg837121@gmail.com', // the email
your_password: 'sara123456789', // the password

### end point of the order

id: 1
quantity_user: 2, // the quantity of the order
status_user: 'Not Comblited', // the statues of user
id_user : the id of the user

### end point of the product

id : 1
product_name: 'jenies', // the th name of product
descount_offer: null, // if the descount found
product_brand: 'sara', // the brand of the product
product_price: 400, //the price of the product
producr_category: 'clouth', //the category of the product

#### the method

We used the method (get one , get all , create , update , delete) on all tables in data base

### user eschema

CREATE TABLE usersestore (
id SERIAL PRIMARY KEY,
user_name VARCHAR(50) NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
your_email VARCHAR(50) UNIQUE,
your_password VARCHAR(50) NOT NULL
);

### product eschema

CREATE TABLE productStore(
id SERIAL PRIMARY KEY,
name_producr VARCHAR(50) NOT NULL UNIQUE,
descount_product integer,
brand_product VARCHAR(50) NOT NULL,
price_product integer NOT NULL,
category_product VARCHAR(50)
);

### order eschema

CREATE TABLE orderfromStore(
id SERIAL PRIMARY KEY,
id_user integer NOT NULL,
FOREIGN KEY (id_user) REFERENCES usersestore (id) ON DELETE CASCADE ON UPDATE CASCADE,
status_order VARCHAR(50),
quantity_order integer NOT NULL
);

### order product eschema

CREATE TABLE oderOFproductr(
order_store integer NOT NULL,
product_store integer NOT NULL,
PRIMARY KEY (order_store, product_store),
CONSTRAINT order_con FOREIGN KEY (order_store) REFERENCES orderfromStore(id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT product_con FOREIGN KEY (product_store) REFERENCES productStore(id) ON DELETE CASCADE ON UPDATE CASCADE
);

### jsonwebtoken

and we used the jwt in the login of client in the store
