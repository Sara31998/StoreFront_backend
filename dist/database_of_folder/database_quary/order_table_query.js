"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the sql of order from store
const sql_order_store = {
    // create order from store
    Create_Order: 'INSERT INTO orderfromstore (id_user ,status_order,quantity_order) VALUES ($1,$2,$3) RETURNING * ',
    // get one order from the store
    GetOne_Order: 'SELECT * FROM orderfromstore WHERE id_user = $1',
    // get all order from store
    GetAll_Order: 'SELECT * FROM orderfromstore ',
    // update the order from store
    UpDateOne_Order: 'UPDATE orderfromstore SET status_order= ($1) , quantity_order = ($2)  WHERE id = ($3) RETURNING *',
    // delet the order from store
    DeletOne_Order: 'DELETE FROM orderfromstore WHERE id_user = ($1) RETURNING *',
};
// export of the sql order from store to used in files
exports.default = sql_order_store;
