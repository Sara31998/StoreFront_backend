/* Replace with your SQL commands */
CREATE TABLE productstore(
id SERIAL PRIMARY KEY, 
name_producr VARCHAR(50) NOT NULL  UNIQUE,
descount_product integer,
brand_product VARCHAR(50) ,
price_product integer ,
category_product VARCHAR(50)
);