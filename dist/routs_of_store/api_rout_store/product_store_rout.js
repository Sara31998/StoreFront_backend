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
const pro_table_controll_1 = __importDefault(require("../../controll_of_database/pro_table_controll"));
// create the router express
const Pro_Store_Rout = express_1.default.Router();
// create the router of order from the store
const controll = new pro_table_controll_1.default();
Pro_Store_Rout.get('/GetOneProduction/:id', middleware_of_authanticate_1.default, controll.getProductsById)
    .get('/GetAllProduct', middleware_of_authanticate_1.default, controll.getProducts) // the get all of product
    .post('/CreateProduct', middleware_of_authanticate_1.default, controll.createProduct) // the create product
    .patch('UpDateProduct', middleware_of_authanticate_1.default, controll.updateProduct) // update product
    .delete('/DeletProduct', middleware_of_authanticate_1.default, controll.deleteProduct); // delet the prodct
// export the product Router
exports.default = Pro_Store_Rout;
