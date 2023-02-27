/* Replace with your SQL commands */
CREATE TABLE clientuserstore (
    id SERIAL PRIMARY KEY,
    user_name varchar(25) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    your_email varchar(50) NOT NULL,
    your_password_digest varchar
);