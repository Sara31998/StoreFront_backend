"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports file
//improt express models to rout
const express_1 = __importDefault(require("express"));
//import middle ware to the authinticat
const middleware_of_authanticate_1 = __importDefault(require("../../project_middle_ware/middleware_of_authanticate"));
//import the controll order
const ord_table_controll_1 = __importDefault(require("../../controll_of_database/ord_table_controll"));
// create the router express
const Ord_Store_Rout = express_1.default.Router();
const controll = new ord_table_controll_1.default();
// create the router of order from the store
Ord_Store_Rout.get('/GetOneOrder/:id', middleware_of_authanticate_1.default, controll.getOrderById)
    .get('/GetAllOrder', middleware_of_authanticate_1.default, controll.getOrders) // the get all of order
    .post('/CreateOrder', middleware_of_authanticate_1.default, controll.createOrder) // the create order
    .patch('UpDateOrder', middleware_of_authanticate_1.default, controll.updateOrder) // update order
    .delete('/DeletOrder', middleware_of_authanticate_1.default, controll.deleteOrder); // delet the order
// export the Order Router
exports.default = Ord_Store_Rout;
