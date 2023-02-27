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
// import of the express from express packages
import express from 'express'
//import of the product models 
import { ProductStore } from '../database_of_modles/product_table_modlles';
// connect with the product models
const product_models = new ProductStore()

export default class ProductsController {
    // the function of the get all product from store
    async getProducts(_req: express.Request, res: express.Response) {
        try {
            // the connect with the model of product to  connect with get all of product
            const products = await product_models.getProducts()
            // the statuse of the function when sucessfull
            res.status(200).json(products)
            // the promise is rejective 
        } catch (e) {
            // the error of the statuse is 500 
            res.status(500)
            // return the jsone
            res.json(e)
        }
    }
// the function of the get one product from store
    async getProductsById(req: express.Request, res: express.Response) {
        try {
            // the connect with the model of product to  connect with get one product
            const product = await product_models.getProductById(parseInt(req.params.id))
            // the statuse of the function when sucessfull
            res.status(200).json(product)
             // the promise is rejective 
        } catch (e) {
            // the error of the statuse is 500 
            res.status(500)
            //return the jsone
            res.json(e)
        }
    }
// the function of the create product in store
    async createProduct(req: express.Request, res: express.Response) {
        try {
            // if function to certine the name of the product
            if (!req.body.name_producr) {
                // return the 400 if the fiald 
                return res.status(400).json({
                    // the massage error
                    error: 'Product name is required',
                })
            }
            // the connect with the model of product to  connect with create the product
            const product = await product_models.createProduct({
                id: parseInt(req.params.id as string),  // the id of the product
                name_producr: req.body.name_producr as string,  // the name of the product
                price_product: parseFloat(req.body.price_product as string), // the price of the product
                category_product: req.body.category_product as string, // the categry of the product
                brand_product: req.body.brand_product as string, // the brand of the product 
                descount_product: parseInt(req.body.descount_product as string) // the descount of the product 
            })
            // the statuse of the function when sucessfull
            res.status(201).json(product)
             // the promise is rejective 
        } catch (e) {
            // the error of the statuse is 500 and return jsone
            res.status(500).json(e)
        }
    }
// the function of the update product in store
    async updateProduct(req: express.Request, res: express.Response) {
        try {
            // if function to certine the name of the product
            if (!req.body.name_producr) {
                // return the 400 if the fiald
                return res.status(400).json({
                    // the massage error
                    error: 'Product name is required',
                })
            }
            // the connect with the model of product to  connect with delet
            const product = await product_models.updateProduct({
              id: parseInt(req.params.id as string),  // the id of the product
              name_producr: req.body.name_producr as string,  // the name of the product
              price_product: parseFloat(req.body.price_product as string), // the price of the product
              category_product: req.body.category_product as string,   // the categry of the product
              brand_product: req.body.brand_product as string, // the brand of the product
              descount_product: parseInt(req.body.descount_product as string)// the descount of the product
            })
            // the statuse of the function when sucessfull
            res.status(201).json(product)
             // the promise is rejective 
        } catch (e) {
            // the error of the statuse is 500 and return jsone
            res.status(500).json(e)
        }
    }
// the function of the delet product from store
    async deleteProduct(req: express.Request, res: express.Response) {
        try {
            // the connect with the model of product to  connect with delet
            await product_models.deleteProduct(parseInt(req.params.id as string))
            // the statuse of the function when sucessfull
            res.status(200).json({ status: `Deleted product ${req.params.id}` })
             // the promise is rejective 
        } catch (e) {
            // the error of the statuse is 500 and return jsone
            res.status(500).json(e)
        }
    }
}

