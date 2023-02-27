"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports file
//improt express models to rout
const express_1 = require("express");
//import middle ware to the authinticat
const middleware_of_authanticate_1 = __importDefault(require("../../project_middle_ware/middleware_of_authanticate"));
//import the controll order
const ord_proControll = __importStar(require("../../controll_of_database/pro_ord_table_controll"));
// create the router express
const Ord_Pro_Store_Rout = (0, express_1.Router)();
// create the router of order from the store
Ord_Pro_Store_Rout.get('/GetOnePro_Ord/:id', middleware_of_authanticate_1.default, ord_proControll.GetOnePro_Ord) // the get one of product order
    .get('/GetAllPro_Ord', middleware_of_authanticate_1.default, ord_proControll.GetAllPro_Ord) // the get all of order
    .post('/CreatePro_Ord', middleware_of_authanticate_1.default, ord_proControll.CreatePro_Ord) // the create order
    .patch('UpDatePro_Ord', middleware_of_authanticate_1.default, ord_proControll.UpDatePro_Ord) // update order
    .delete('/DeletPro_Ord', middleware_of_authanticate_1.default, ord_proControll.DeletPro_Ord); // delet the order
// export the Order production Router
exports.default = Ord_Pro_Store_Rout;
