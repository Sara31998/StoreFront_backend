// imports file
//improt express models to rout
import express from 'express'
//import middle ware to the authinticat
import clientAuth from '../../project_middle_ware/middleware_of_authanticate';
//import the controll order
import ordControll from '../../controll_of_database/ord_table_controll';

// create the router express
const Ord_Store_Rout = express.Router()
const controll = new ordControll();
// create the router of order from the store

Ord_Store_Rout.get('/GetOneOrder/:id', clientAuth, controll.getOrderById)
  .get('/GetAllOrder', clientAuth, controll.getOrders) // the get all of order
  .post('/CreateOrder', clientAuth, controll.createOrder) // the create order
  .patch('UpDateOrder', clientAuth, controll.updateOrder) // update order
  .delete('/DeletOrder', clientAuth, controll.deleteOrder) // delet the order
// export the Order Router
export default Ord_Store_Rout
