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
const client_table_controll_1 = __importDefault(require("../../controll_of_database/client_table_controll"));
// // create the router express
// const Client_Rout = Router()
// // create the router of order from the store
// Client_Rout.get('/ClientGetOne/:id', clientAuth, clientControll.ClientGetOne) // the get one client
//   .get('/ClientGetAll', clientAuth, clientControll.ClientGetAll) // the get all of client
//   //.get('/ClientGetOrderById', clientAuth, clientControll.ClientGetOrderById) // the get order by client id
//  // .get('/ClientGetProductById', clientAuth, clientControll.ClientGetProductById) // the get order by client id
//   .post('/ClientCreate', clientAuth, clientControll.ClientCreate) // the create client
//   .patch('ClientUpdate', clientAuth, clientControll.ClientUpdate) // update client
//   .delete('/ClientDelet', clientAuth, clientControll.ClientDelet) // delet the client
//   //.post('/ClientAuth', clientControll.ClientAuth) // the authanticate client
// // export the client Router
// export default Client_Rout
const userRouter = express_1.default.Router();
const controller = new client_table_controll_1.default();
userRouter.get('/', controller.getUsers);
userRouter.get('/:id', controller.getUserById);
userRouter.post('/create', controller.createUser);
userRouter.put('/:id', middleware_of_authanticate_1.default, controller.updateUser);
userRouter.delete('/:id', middleware_of_authanticate_1.default, controller.deleteUser);
exports.default = userRouter;
