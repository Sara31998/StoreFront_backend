"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletPro_Ord = exports.UpDatePro_Ord = exports.CreatePro_Ord = exports.GetAllPro_Ord = exports.GetOnePro_Ord = void 0;
// the production order models
const ord_pro_table_modles_1 = __importDefault(require("../database_of_modles/ord_pro_table_modles"));
// the vriables of the production order models
const Ord_Pro_Model = new ord_pro_table_modles_1.default();
// export of Get One
const GetOnePro_Ord = async (req, res, next) => {
    // if the promise is true
    try {
        // the vriable of the product order
        const Pro_Ord_Store = await Ord_Pro_Model.GetOne_Ord_Pro_Store(
        // the request is return of the id
        req.params.id);
        res.status(200).json({
            // the status
            statusoford: 'Succes',
            data: Pro_Ord_Store,
            massege: 'Get One',
        });
        // if the promis is the fialed
    }
    catch (error) {
        // the error of the fialed
        next(error);
    }
};
exports.GetOnePro_Ord = GetOnePro_Ord;
// export of the Get All of production order
const GetAllPro_Ord = async (req, res, next) => {
    // if the promise is true
    try {
        // the vriable of the product order
        const Pro_Ord_All_Store = await Ord_Pro_Model.GetAll_Ord_FromStore();
        res.status(200).json({
            // the status
            statusoford: 'Succes',
            // the data
            data: Pro_Ord_All_Store,
            //the massege
            massege: 'Get All Product Order',
        });
        // if the promis is the fialed
    }
    catch (error) {
        // the error of the fialed
        next(error);
    }
};
exports.GetAllPro_Ord = GetAllPro_Ord;
// export of the Create  of production order
const CreatePro_Ord = async (req, res, next) => {
    // if the promise is true
    try {
        // the vriable of the product order
        const Pro_Ord_Creat_Store = await Ord_Pro_Model.Create_Ord_Pro_Store(req.body);
        res.status(200).json({
            // the status
            statusoford: 'Succes',
            // the data
            data: Pro_Ord_Creat_Store,
            //the massege
            massege: 'Create one  Product Order',
        });
        // if the promis is the fialed
    }
    catch (error) {
        // the error of the fialed
        next(error);
    }
};
exports.CreatePro_Ord = CreatePro_Ord;
// export of the UpDate of production order
const UpDatePro_Ord = async (req, res, next) => {
    // if the promise is true
    try {
        // the vriable of the product order
        const Pro_Ord_UpDate_Store = await Ord_Pro_Model.UpDate_Ord_FromStore(req.body);
        res.status(200).json({
            // the status
            statusoford: 'Succes',
            // the data
            data: Pro_Ord_UpDate_Store,
            //the massege
            massege: 'Get All Product Order',
        });
        // if the promis is the fialed
    }
    catch (error) {
        // the error of the fialed
        next(error);
    }
};
exports.UpDatePro_Ord = UpDatePro_Ord;
// export of the Delet One  of production order
const DeletPro_Ord = async (req, res, next) => {
    // if the promise is true
    try {
        // the vriable of the product order
        const Pro_Ord_Delet_Store = await Ord_Pro_Model.Delet_One_Ord_FromStore(req.body.id);
        res.status(200).json({
            // the status
            statusoford: 'Succes',
            // the data
            data: Pro_Ord_Delet_Store,
            //the massege
            massege: 'Delet Product Order',
        });
        // if the promis is the fialed
    }
    catch (error) {
        // the error of the fialed
        next(error);
    }
};
exports.DeletPro_Ord = DeletPro_Ord;
