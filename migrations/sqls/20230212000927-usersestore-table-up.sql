/* Replace with your SQL commands */
CREATE TABLE usersestore (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) ,
    first_name VARCHAR(50),
    last_name VARCHAR(50) ,
    your_email VARCHAR(50) UNIQUE,
    your_password VARCHAR(50) 
);