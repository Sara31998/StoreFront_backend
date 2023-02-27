//imports files
// import the routs from the table of data base
// import the product in store
import Product_Store_Rout from './api_rout_store/product_store_rout';
//import the order from store
import Order_Store_Rout from './api_rout_store/order_store_rout';
//import the order of production
import Pro_Ord_Store_Rout from './api_rout_store/ord_pro_store_rout';
//import the client in store
import Client_Store_Rout from './api_rout_store/client_store_rout';
// import the authanticate middleware
import clientAuth from '../project_middle_ware/middleware_of_authanticate';
// import the express
import express from 'express'
// the create the router
const roterStore = express.Router()
// the router of the store
roterStore
  .use('/client', Client_Store_Rout) // the router of client
  .use('/productstore', Product_Store_Rout) // the router of product
  .use('/orderstore', clientAuth, Order_Store_Rout) // the router of order
  .use('/ordprostore', clientAuth, Pro_Ord_Store_Rout) // the router of order production

// export of the router
export default roterStore