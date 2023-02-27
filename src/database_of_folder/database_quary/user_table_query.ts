// import user quary from interface
// import  User_Store_Query from "../../interface_of_store/user_of_store_query";

// let sql_Store: User_Store_Query = {
//   Create: `INSERT INTO `
// }

// import user quary from interface
import User_Store_Query from '../../interface_of_store_/user_of_store_query';
// the sql of store to create the rows in the table user
const sql_Store: User_Store_Query = {
  // the create of user client
  Create_Store_User:
    'INSERT INTO usersestore (user_name, first_name, last_name, your_email, your_password) VALUES ($1,$2,$3,$4,$5) RETURNING * ',
  // get one the store user client
  GetOne_Store_User:
    'SELECT  user_name, first_name, last_name, your_email, your_password FROM usersestore WHERE id = $1 ',
  // get all users store client
  GetAll_Users:
    'SELECT  user_name, first_name, last_name, your_email, your_password FROM usersestore ',
  // update the user store client formation
  UpdateOne_Store_User:
    'UPDATE usersestore SET user_name = ($1), first_name = ($2), last_name = ($3), your_email = ($4), your_password = ($5) WHERE  id = ($6) RETURNING * ',
  // delet the store user client
  DeleteOne_Store_User: 'DELETE FROM usersestore WHERE id = ($1) RETURNING *',
  // whers the user clinte
  User_Where: {
    Tow_From_Table:
      'SELECT client.user_name ,ord.quantity_order , ord.status_order FROM usersestore client INNER JOIN orderfromstore ord ON client.id = ord.id_user  WHERE client.id = ($1)',
    Three_From_Table:
      'SELECT product.name_producr , product.descount_product , product.price_product , product.category_product FROM usersestore client  JOIN orderfromstore ord ON client.id = ord.id_user JOIN oderofproductr pro_ord ON  ord.id = pro_ord.order_store JOIN productstore product ON pro_ord.productstore = product.id WHERE client.id = ($1)',
  },
}
// export of the sql_store
export default sql_Store
