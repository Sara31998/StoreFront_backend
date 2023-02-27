// imports file
//improt express models to rout
import  express  from 'express'
//import middle ware to the authinticat
import clientAuth from '../../project_middle_ware/middleware_of_authanticate'
//import the controll order
import  proControll from '../../controll_of_database/pro_table_controll';

// create the router express
const Pro_Store_Rout = express.Router()
// create the router of order from the store
const controll = new proControll()
Pro_Store_Rout.get('/GetOneProduction/:id', clientAuth, controll.getProductsById)
  .get('/GetAllProduct', clientAuth, controll.getProducts) // the get all of product
  .post('/CreateProduct', clientAuth, controll.createProduct) // the create product
  .patch('UpDateProduct', clientAuth, controll.updateProduct) // update product
  .delete('/DeletProduct', clientAuth, controll.deleteProduct) // delet the prodct
// export the product Router
export default Pro_Store_Rout



