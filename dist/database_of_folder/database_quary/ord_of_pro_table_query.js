"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the function of the sql order of production from store
const sql_ord_pro_store = {
    Insert_Ord_Pro: 
    // CREATE THE ROW OF THE ORDER OF PRODUCT FROM STORE
    'INSERT INTO oderofproduct (orderstore, productstore) VALUES ($1,$2) RETURNING *',
    // GET ALL ORDERS OF PRODUCTION FROM STORE
    GetAll_Ord_Pro: 'SELECT  orderstore ,productstore FROM oderofproduct',
    // GET ORDER OF PRODUCT FROM STORE
    Get_Ord_By_OrderId: 'SELECT * FROM oderofproduct WHERE orderstore = $1 ',
    //UPDATE THE ORDER FROM ORDER ID
    UpDate_Ord_By_OrderId: 'UPDATE oderofproduct SET productstore =$1 WHERE orderstore = $2 RETURNING *',
    //DELET ORDER BY ORDER ID
    Delet_Ord_By_OrderId: 'DELETE FROM oderofproduct WHERE orderstore = $1 RETURNING *',
};
//export of the sql order production from store
exports.default = sql_ord_pro_store;
