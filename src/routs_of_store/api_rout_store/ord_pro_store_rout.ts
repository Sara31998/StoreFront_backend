// imports file
//improt express models to rout
import { Router } from 'express'
//import middle ware to the authinticat
import clientAuth from '../../project_middle_ware/middleware_of_authanticate'
//import the controll order
import * as ord_proControll from '../../controll_of_database/pro_ord_table_controll';

// create the router express
const Ord_Pro_Store_Rout = Router()
// create the router of order from the store

Ord_Pro_Store_Rout.get(
  '/GetOnePro_Ord/:id',
  clientAuth,
  ord_proControll.GetOnePro_Ord
) // the get one of product order
  .get('/GetAllPro_Ord', clientAuth, ord_proControll.GetAllPro_Ord) // the get all of order
  .post('/CreatePro_Ord', clientAuth, ord_proControll.CreatePro_Ord) // the create order
  .patch('UpDatePro_Ord', clientAuth, ord_proControll.UpDatePro_Ord) // update order
  .delete('/DeletPro_Ord', clientAuth, ord_proControll.DeletPro_Ord) // delet the order
// export the Order production Router
export default Ord_Pro_Store_Rout

