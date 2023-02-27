"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the sql vriable to the product create in database
const sql_pro_store = {
    // CREATE THE PRODUCTION IN STORE
    Create_Product: 'INSERT INTO productstore (name_producr ,descount_product,brand_product,price_product,category_product) VALUES ($1,$2,$3,$4,$5) RETURNING * ',
    // GET ONE PRODUCTION  FROM STORE
    GetOne_Product: 'SELECT * FROM productstore WHERE id = $1 ',
    //GET ALL THE PRODUCT IN THA STORE
    GetAll_Product: 'SELECT * FROM productstore ',
    // UPDATE ONE OF THE PRODUCT IN THE STORE
    UpDateOne_Product: 'UPDATE productstore SET name_producr = ($1) ,descount_product= ($2) , brand_product= ($3), price_product= ($4) , category_product = ($5) WHERE id = ($6) RETURNING *',
    //DELET ONE PRODUCT FROM STORE
    DeletOne_Product: 'DELETE FROM productstore WHERE id = ($1) RETURNING *',
};
// the export of the sql product in the store
exports.default = sql_pro_store;
