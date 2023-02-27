/* Replace with your SQL commands */
CREATE TABLE oderofproduct(
   orderstore integer,
   productstore integer,
   PRIMARY KEY (orderstore, productstore),
   CONSTRAINT CON_orderstore FOREIGN KEY (orderstore) REFERENCES orderfromstore(id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT CON_productstore FOREIGN KEY (productstore) REFERENCES productstore(id) ON DELETE CASCADE ON UPDATE CASCADE
);