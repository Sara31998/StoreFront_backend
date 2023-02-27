/* Replace with your SQL commands */
CREATE TABLE orderfromstore(
    id SERIAL PRIMARY KEY,
    id_user integer ,
    FOREIGN KEY(id_user) REFERENCES usersestore(id) ON DELETE CASCADE ON UPDATE CASCADE,
    status_order VARCHAR(50),
    quantity_order integer 
);