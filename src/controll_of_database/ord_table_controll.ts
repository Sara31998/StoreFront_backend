// //import files
// // import express
// import { Response, Request, NextFunction } from 'express'
// //import the order models
// import Order_Mod from '../database_of_modles/order_table_modles';
// // the vriables of the order models
// const order_models = new Order_Mod()
// // export of Get One
// export const GetOneOrder = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the order
//     const OrderGetOne = await order_models.GetOne_Ord_FromStore(
//       // the request is return of the id
//       req.params.id as unknown as number
//     )
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data of order
//       data: OrderGetOne,
//       // the massege
//       massege: 'Get One order from store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the Get All of Order
// export const GetAllOrder = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product
//     const Order_GetAll = await order_models.GetAll_Ord_FromStore()
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Order_GetAll,
//       //the massege
//       massege: 'Get All Order',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the Create  of Order
// export const CreateOrder = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product
//     const Order_Creat = await order_models.Create_Ord_FromStore(req.body)
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Order_Creat,
//       //the massege
//       massege: 'Get All order from store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the UpDate of Order
// export const UpDateOrder = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the Order
//     const Order_UpDate = await order_models.UpDate_Ord_FromStore(req.body)
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Order_UpDate,
//       //the massege
//       massege: 'UpDate order in store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the Delet One  of order
// export const DeletOrder = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the  order
//     const order_Delet = await order_models.Delet_One_Ord_FromStore(req.body.id_user)
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: order_Delet,
//       //the massege
//       massege: 'Delet order from store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }

// import supertest from 'supertest'
// import app from '../index'
// import { createJWTToken } from '../utiles/authanticate'

// const request = supertest(app)
// const token: string = createJWTToken(1, 'bearer')

// describe('Orders controllers: ', () => {
//     it('/orders/create should return a new order ', () => {
//         const data = {
//             user_id: 1,
//             status: 'new',
//         }
//         request
//             .post('/api/orders/create')
//             .set('Authorization', `Bearer ${token}`)
//             .send(data)
//             .expect('Content-Type', 'application/json')
//             .expect(201)
//             .expect({
//                 id: 1,
//                 user_id: 1,
//                 status: 'new',
//             })
//     })

//     it('orders/add-product/:id should add a product to an order', () => {
//         const data = {
//             product_id: 1,
//             quantity: 10,
//         }
//         request
//             .post('/api/orders/add-product/1')
//             .set('Authorization', `Bearer ${token}`)
//             .send(data)
//             .expect('Content-Type', 'application/json')
//             .expect(201)
//             .expect({
//                 id: 1,
//                 order_id: 1,
//                 product_id: 1,
//                 quantity: 10,
//             })
//     })

//     it('/orders/create should fail if user_id is not included in parameters', () => {
//         const data = {
//             status: 'new',
//         }
//         request
//             .post('/api/orders/create')
//             .set('Authorization', `Bearer ${token}`)
//             .send(data)
//             .expect(400)
//             .expect({
//                 error: 'Missing one or more required parameters',
//             })
//     })

//     it('/orders/create should fail if status is not included in parameters', () => {
//         const data = {
//             user_id: 1,
//         }
//         request
//             .post('/api/orders/create')
//             .set('Authorization', `Bearer ${token}`)
//             .send(data)
//             .expect(400)
//             .expect({
//                 error: 'Missing one or more required parameters',
//             })
//     })

//     it('/orders should show all orders', () => {
//         request
//             .get('/api/orders')
//             .expect('Content-Type', 'application/json')
//             .expect(200)
//             .expect({
//                 id: 1,
//                 user_id: 1,
//                 status: 'new',
//             })
//     })

//     it('/orders/:id show a order', () => {
//         request
//             .get('/api/orders/1')
//             .set('Authorization', `Bearer ${token}`)
//             .expect('Content-Type', 'application/json')
//             .expect(200)
//             .expect({
//                 id: 1,
//                 user_id: 1,
//                 status: 'new',
//             })
//     })

//     it('/orders should update an order', () => {
//         const data = {
//             id: 1,
//             user_id: 1,
//             status: 'in progress',
//         }
//         request
//             .put('/api/orders/1')
//             .set('Authorization', `Bearer ${token}`)
//             .send(data)
//             .expect('Content-Type', 'application/json')
//             .expect(200)
//             .expect({
//                 id: 1,
//                 user_id: 1,
//                 status: 'in progress',
//             })
//     })

//     it('/orders/:id should delete an order given its id', () => {
//         request
//             .delete('/api/orders/1')
//             .set('Authorization', `Bearer ${token}`)
//             .expect(200)
//             .expect({
//                 id: 1,
//                 user_id: 1,
//                 status: 'in progress',
//             })
//     })

//     it('/orders/current-order/:id should show orders with status not completed', () => {
//         request
//             .get('/api/orders/current-order/1')
//             .set('Authorization', `Bearer ${token}`)
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .expect({
//                 id: 1,
//                 user_id: 1,
//                 status: 'in progress',
//             })
//     })
// })
// import of the express from express package
import express from 'express'
// the order models
import  OrderStore from '../database_of_modles/order_table_modles';
// the connect of the order models
const order_models = new OrderStore()
// the export of the ordercontroll
export default class OrdersController {
    /// get the all order from store
    async getOrders(_req: express.Request, res: express.Response) {
        try {
            // the create connect with the order model to connect with the get orders
            const orders = await order_models.getOrders()
            // the statuse when the promise is succesful
            res.status(200).json(orders)
            // the rejective of the promise 
        } catch (e) {
            // tha statuse of the rejective promise and return jsone
            res.status(500).json(e)
        }
    }
    /// get one of order from store
    async getOrderById(req: express.Request, res: express.Response) {
        try {
             // the create connect with the order model to connect with the get one order
            const order = await order_models.getOrderById(parseInt(req.params.id))
            // the statuse when the promise is succesful
            res.status(200).json(order)
            // the rejective of the promise
        } catch (e) {
            // tha statuse of the rejective promise and return jsone
            res.status(400).json(e)
        }
    }
    /// create the  order from store
    async createOrder(req: express.Request, res: express.Response) {
        try {
            const { id_user, status_order, quantity_order } = req.body
            // the function if of the certine the data of order
            if (!id_user || !status_order || !quantity_order) {
                  // return the 400 statuse and jsone with error
                return res.status(400).json({
                    // the error massage 
                    error: 'Missing one or more required parameters',
                })
            }
             // the create connect with the order model to connect with the create order
            const order = await order_models.createOrder({
                id_user: parseInt(id_user as string), // the id of the client owner user
                status_order: status_order as string,  // the statuse of the order
                quantity_order: parseInt(quantity_order as string)    // the quantity of the order 
            })
            // the statuse when the promise is succesful
            res.status(201).json(order)
            // the rejective of the promise
        } catch (e) {
            // tha statuse of the rejective promise and return jsone
            res.status(400).json(e)
        }
    }
    /// add product to the  order from store
    async addProductToOrder(req: express.Request, res: express.Response) {
        try {
            // the id of the body response
            const orderstore = parseInt(req.params.id)
            // the id of the body response
            const productstore = parseInt(req.body.productstore as string)
            // the function if of the certine the data of order
            if (!orderstore || !productstore) {
                  // return the 400 statuse and jsone with error
                return res.status(400).json({
                    // the error massage 
                    error: 'Missing one or more required parameters',
                })
            }
             // the create connect with the order model to connect with the get product to order
            const product = await order_models.addProductToOrder({
                orderstore, // the id of the order store
                productstore, // the id of the product store 
            })
            // the statuse when the promise is succesful
            res.status(200).json(product)
            // the rejective of the promise
        } catch (e) {
            // tha statuse of the rejective promise and return jsone
            res.status(400).json(e)
        }
    }
    /// update the order from store
    async updateOrder(req: express.Request, res: express.Response) {
        try {
            // // the vriable to the body of the respons
            const { id_user, status_order, quantity_order } = req.body
            // the id of the body response
            const id = req.params.id
            // the function if of the certine the data of order
            if (!id || !id_user || !status_order || !quantity_order) {
                // return the 400 statuse and jsone with error 
                return res.status(400).json({
                    // the error massage 
                    error: 'Missing one or more required parameters',
                })
            }
             // the create connect with the order model to connect with the update order
            const order = await order_models.updateOrder({
                id: parseInt(req.params.id as string), // the id of the order 
                id_user: parseInt(id_user as string), // the id of the client owner user
                status_order: status_order as string, // the statuse of the order
                quantity_order: parseInt(quantity_order as string)   // the quantity of the order
            })
            // the statuse when the promise is succesful
            res.status(201).json(order)
            // the rejective of the promise
        } catch (e) {
            // tha statuse of the rejective promise and return jsone
            res.status(500).json(e)
        }
    }
    /// delet the  order from store
    async deleteOrder(req: express.Request, res: express.Response) {
        try {
             // the create connect with the order model to connect with the delet order
            await order_models.deleteOrder(parseInt(req.params.id as string))
            // the statuse when the promise is succesful
            res.status(200).json({ status: `Deleted order ${req.params.id}` })
            // the rejective of the promise
        } catch (e) {
          // tha statuse of the rejective promise and return jsone
            res.status(500).json(e)
        }
    }
// get current order in store now
    async getCurrentOrders(req: express.Request, res: express.Response) {
        try {
             // the create connect with the order model to connect with the get ocurrunt order
            const currentOrders = await order_models.getCurrentOrders(
                // the id of the order 
                parseInt(req.params.id as string)
            )
            // the statuse when the promise is succesful
            res.status(200).json(currentOrders)
            // the rejective of the promise
        } catch (e) {
            // tha statuse of the rejective promise and return jsone
            res.status(400).json(e)
        }
    }
}

