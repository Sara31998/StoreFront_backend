"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports files
// import the routs from the table of data base
// import the product in store
const product_store_rout_1 = __importDefault(require("./api_rout_store/product_store_rout"));
//import the order from store
const order_store_rout_1 = __importDefault(require("./api_rout_store/order_store_rout"));
//import the order of production
const ord_pro_store_rout_1 = __importDefault(require("./api_rout_store/ord_pro_store_rout"));
//import the client in store
const client_store_rout_1 = __importDefault(require("./api_rout_store/client_store_rout"));
// import the authanticate middleware
const middleware_of_authanticate_1 = __importDefault(require("../project_middle_ware/middleware_of_authanticate"));
// import the express
const express_1 = __importDefault(require("express"));
// the create the router
const roterStore = express_1.default.Router();
// the router of the store
roterStore
    .use('/client', client_store_rout_1.default) // the router of client
    .use('/productstore', product_store_rout_1.default) // the router of product
    .use('/orderstore', middleware_of_authanticate_1.default, order_store_rout_1.default) // the router of order
    .use('/ordprostore', middleware_of_authanticate_1.default, ord_pro_store_rout_1.default); // the router of order production
// export of the router
exports.default = roterStore;
