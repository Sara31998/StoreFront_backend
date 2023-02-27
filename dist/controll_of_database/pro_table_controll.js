"use strict";
// //import files
// // import express
// import { Response, Request, NextFunction } from 'express'
// //import the product models
// import Product_Mod from '../database_of_modles/product_table_modlles';
// // the vriables of the production models
// const product_models = new Product_Mod()
// // export of Get One
// export const GetOneProduction = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product order
//     const ProductGetOne = await product_models.GetOne_ProductStore(
//       // the request is return of the id
//       req.params.id as unknown as number
//     )
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data of product
//       data: ProductGetOne,
//       // the massege
//       massege: 'Get One Product',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the Get All of production
// export const GetAllProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product
//     const Product_GetAll = await product_models.GetAll_ProductStore()
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Product_GetAll,
//       //the massege
//       massege: 'Get All Product Order',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the Create  of production
// export const CreateProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product
//     const Product_Creat = await product_models.Create_ProductStore(req.body)
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Product_Creat,
//       //the massege
//       massege: 'create Product in store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the UpDate of production
// export const UpDateProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product
//     const Produc_UpDate = await product_models.UpDate_ProductStore(req.body)
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Produc_UpDate,
//       //the massege
//       massege: 'UpDate  Product in store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
// // export of the Delet One  of production order
// export const DeletProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // if the promise is true
//   try {
//     // the vriable of the product order
//     const Product_Delet = await product_models.Delet_One_ProductStore(
//       req.body.id
//     )
//     res.status(200).json({
//       // the status
//       statusoford: 'Succes',
//       // the data
//       data: Product_Delet,
//       //the massege
//       massege: 'Delet Product from store',
//     })
//     // if the promis is the fialed
//   } catch (error) {
//     // the error of the fialed
//     next(error)
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const product_table_modlles_1 = require("../database_of_modles/product_table_modlles");
const store = new product_table_modlles_1.ProductStore();
class ProductsController {
    async getProducts(_req, res) {
        try {
            const products = await store.getProducts();
            res.status(200).json(products);
        }
        catch (e) {
            res.status(500);
            res.json(e);
        }
    }
    async getProductsById(req, res) {
        try {
            const product = await store.getProductById(parseInt(req.params.id));
            res.status(200).json(product);
        }
        catch (e) {
            res.status(500);
            res.json(e);
        }
    }
    async createProduct(req, res) {
        try {
            if (!req.body.name) {
                return res.status(400).json({
                    error: 'Product name is required',
                });
            }
            const product = await store.createProduct({
                id: parseInt(req.params.id),
                name_producr: req.body.name_producr,
                price_product: parseFloat(req.body.price_product),
                category_product: req.body.category_product,
                brand_product: req.body.brand_product,
                descount_product: parseInt(req.body.descount_product)
            });
            res.status(201).json(product);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async updateProduct(req, res) {
        try {
            if (!req.body.name) {
                return res.status(400).json({
                    error: 'Product name is required',
                });
            }
            const product = await store.updateProduct({
                id: parseInt(req.params.id),
                name_producr: req.body.name_producr,
                price_product: parseFloat(req.body.price_product),
                category_product: req.body.category_product,
                brand_product: req.body.brand_product,
                descount_product: parseInt(req.body.descount_product)
            });
            res.status(201).json(product);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async deleteProduct(req, res) {
        try {
            await store.deleteProduct(parseInt(req.params.id));
            res.status(200).json({ status: `Deleted product ${req.params.id}` });
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}
exports.default = ProductsController;
