"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_table_modles_1 = __importDefault(require("../database_of_modles/order_table_modles"));
const store = new order_table_modles_1.default();
class OrdersController {
    async getOrders(_req, res) {
        try {
            const orders = await store.getOrders();
            res.status(200).json(orders);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async getOrderById(req, res) {
        try {
            const order = await store.getOrderById(parseInt(req.params.id));
            res.status(200).json(order);
        }
        catch (e) {
            res.status(400).json(e);
        }
    }
    async createOrder(req, res) {
        try {
            const { id_user, status_order, quantity_order } = req.body;
            if (!id_user || !status_order || !quantity_order) {
                return res.status(400).json({
                    error: 'Missing one or more required parameters',
                });
            }
            const order = await store.createOrder({
                id_user: parseInt(id_user),
                status_order: status_order,
                quantity_order: parseInt(quantity_order)
            });
            res.status(201).json(order);
        }
        catch (e) {
            res.status(400).json(e);
        }
    }
    async addProductToOrder(req, res) {
        try {
            const orderstore = parseInt(req.params.id);
            const productstore = parseInt(req.body.productstore);
            if (!orderstore || !productstore) {
                return res.status(400).json({
                    error: 'Missing one or more required parameters',
                });
            }
            const product = await store.addProductToOrder({
                orderstore,
                productstore,
            });
            res.status(200).json(product);
        }
        catch (e) { }
    }
    async updateOrder(req, res) {
        try {
            const { id_user, status_order, quantity_order } = req.body;
            const id = req.params.id;
            if (!id || !id_user || !status_order || !quantity_order) {
                return res.status(400).json({
                    error: 'Missing one or more required parameters',
                });
            }
            const order = await store.updateOrder({
                id: parseInt(req.params.id),
                id_user: parseInt(id_user),
                status_order: status_order,
                quantity_order: parseInt(quantity_order)
            });
            res.status(201).json(order);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async deleteOrder(req, res) {
        try {
            await store.deleteOrder(parseInt(req.params.id));
            res.status(200).json({ status: `Deleted order ${req.params.id}` });
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async getCurrentOrders(req, res) {
        try {
            const currentOrders = await store.getCurrentOrders(parseInt(req.params.id));
            res.status(200).json(currentOrders);
        }
        catch (e) {
            res.status(400).json(e);
        }
    }
}
exports.default = OrdersController;
