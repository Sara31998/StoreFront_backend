// import of the order product interface
import Order_Product_Store from '../../interface_of_store_/pro_ord_of_store_quer';
// the function of the sql order of production from store
const sql_ord_pro_store: Order_Product_Store = {
  Insert_Ord_Pro:
    // CREATE THE ROW OF THE ORDER OF PRODUCT FROM STORE
    'INSERT INTO oderofproduct (orderstore, productstore) VALUES ($1,$2) RETURNING *',
  // GET ALL ORDERS OF PRODUCTION FROM STORE
  GetAll_Ord_Pro: 'SELECT  orderstore ,productstore FROM oderofproduct',
  // GET ORDER OF PRODUCT FROM STORE
  Get_Ord_By_OrderId: 'SELECT * FROM oderofproduct WHERE orderstore = $1 ',
  //UPDATE THE ORDER FROM ORDER ID
  UpDate_Ord_By_OrderId:
    'UPDATE oderofproduct SET productstore =$1 WHERE orderstore = $2 RETURNING *',
  //DELET ORDER BY ORDER ID
  Delet_Ord_By_OrderId:
    'DELETE FROM oderofproduct WHERE orderstore = $1 RETURNING *',
}
//export of the sql order production from store
export default sql_ord_pro_store
