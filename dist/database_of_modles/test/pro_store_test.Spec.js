"use strict";
// import files to used
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import database from database
const index_database_1 = __importDefault(require("../../database_of_folder/index_database"));
// import product models
const product_table_modlles_1 = __importDefault(require("../product_table_modlles"));
// the vriables to used in test
const product_store_models = new product_table_modlles_1.default();
// the test of endpoint of the product
describe('test the endpoint of the product', () => {
    // create the product vriables
    const productstore1 = {
        name_producr: 'Jeanse',
        descount_product: 10,
        brand_product: 'joda',
        price_product: 100,
        category_product: 'clouth', // the product category
    }; // all this prapter equal to the type of product
    // used to the before all in testing
    beforeAll(async () => {
        // create the new product
        const new_product = await product_store_models.createProduct(productstore1);
        // connect the id of product to th id of the new product
        productstore1.id = new_product.id;
    });
    // used the after all in testing
    afterAll(async () => {
        // connection of the database
        const connection = await index_database_1.default.connect();
        // write the sql of data base
        const sqldatabase = 'DELETE FROM productstore';
        // create the quary
        await connection.query(sqldatabase);
        // exite from the database
        connection.release();
    });
    // test of the product
    describe('exite the product method', () => {
        // the test of the create of the client
        it('Create product  the Exite Methods', () => {
            // the expect to the create product is equal to define
            expect(product_store_models.createProduct).toBeDefined();
        });
        // the test of the Get All of the product
        it('Get All product the Exite Methods', () => {
            // the expect to the Get All product is equal to define
            expect(product_store_models.getProducts).toBeDefined();
        });
        // the test of the Get one of the product
        it('Get One product the Exite Methods', () => {
            // the expect to the Get One product is equal to define
            expect(product_store_models.getProductById).toBeDefined();
        });
        // the test of the Update one of the product
        it('UpDate One product the Exite Methods', () => {
            // the expect to the UpDate One product is equal to define
            expect(product_store_models.updateProduct).toBeDefined();
        });
        // the test of the Delet one of the product
        it('Delet One product the Exite Methods', () => {
            // the expect to the Delet One product is equal to define
            expect(product_store_models.deleteProduct).toBeDefined();
        });
    });
    describe('testing of the product models of methods loging', () => {
        it('if the login is create methods should return product', async () => {
            const newproductstore = {
                name_producr: 'dress',
                descount_product: null,
                brand_product: 'sara',
                price_product: 100,
                category_product: 'clouth woman', //the category of the product
            };
            const productStore2 = await product_store_models.createProduct(newproductstore);
            // check if the product_name is found
            expect(productStore2.name_producr).toBe(newproductstore.name_producr);
            // check if the product_price found
            expect(productStore2.price_product).toBe(newproductstore.price_product);
            // check if the descount_offer is found
            expect(productStore2.descount_product).toBe(newproductstore.descount_product);
            // check if the producr_category is found
            expect(productStore2.category_product).toBe(newproductstore.category_product);
            // check if the product brand  is found
            expect(productStore2.brand_product).toBe(newproductstore.brand_product);
        });
        // the test of get all method of product in store
        it('test of the get all methode of all product to list of product ', async () => {
            // the vriable of the all clients in the store
            const productsinstore = await product_store_models.getProducts();
            // check the number of client in store
            expect(productsinstore.length).toBe(2);
        });
        // test of the get one method
        it('the methods of the get one to return on product', async () => {
            // the vriable of the get product
            const productgetone = await product_store_models.getProductById(productstore1.id);
            // check if the name is found
            expect(productgetone.name_producr).toBe(productstore1.name_producr);
            // check if the price found
            expect(productgetone.price_product).toBe(productstore1.price_product);
            // check if the descount is found
            expect(productgetone.descount_product).toBe(productstore1.descount_product);
            //check if the product has the same category
            expect(productgetone.category_product).toBe(productstore1.category_product);
            // check if the brand is found
            expect(productgetone.brand_product).toBe(productstore1.brand_product);
        });
        // test of the update product
        it('method f the update one of the product when login', async () => {
            // connect the vriable whith produc modle
            const productsupdate = await product_store_models.updateProduct({
                ...productstore1,
                name_producr: 'blouse',
                price_product: 50, //the price of the product
            });
            // check if the product_name is ubdate to dress
            expect(productsupdate.name_producr).toBe('blouse');
            // check if the product_price is update to 50
            expect(productsupdate.price_product).toBe(50);
            // check if the descount_offer is found
            expect(productsupdate.descount_product).toBe(productstore1.descount_product);
            // check if the producr_category is found
            expect(productsupdate.category_product).toBe(productstore1.category_product);
            // check if the product brand  is found
            expect(productsupdate.brand_product).toBe(productstore1.brand_product);
        });
        // the test of delet method from store
        it('test the delt method shoud return product', async () => {
            // // the vriable of the product is deleted
            // const productdelete = await product_store_models.deleteProduct(
            //   productstore1.id
            // )
            // // check if the  name of product is found
            // expect(productstore1.name_producr).toBe(productstore1.name_producr)
            // // check if the price is found
            // expect(productdelete.price_product).toBe(productstore1.price_product)
            // // check if the descount is found
            // expect(productstore1.descount_product).toBe(productstore1.descount_product)
            // //check if the product has the same category
            // expect(productstore1.category_product).toBe(
            //   productstore1.category_product
            // )
            // // check if the brand is found
            // expect(productstore1.brand_product).toBe(productstore1.brand_product)
            const productsupdate = await product_store_models.updateProduct({
                ...productstore1,
                name_producr: 'blouse',
                price_product: 50, //the price of the product
            });
            // check if the product_name is ubdate to dress
            expect(productsupdate.name_producr).toBe('blouse');
            // check if the product_price is update to 50
            expect(productsupdate.price_product).toBe(50);
            // check if the descount_offer is found
            expect(productsupdate.descount_product).toBe(productstore1.descount_product);
            // check if the producr_category is found
            expect(productsupdate.category_product).toBe(productstore1.category_product);
        });
    });
});
// import { ProductStore } from '../product_table_modlles'
// const store = new ProductStore()
// describe('Product Model', () => {
//     it('should create a product', async () => {
//         const result = await store.createProduct({
//            id: 1,
//            name_producr: 'Test product',
//            price_product: 40,
//            category_product: 'Test category',
//            descount_product: null,
//            brand_product:'sara'
//         })
//         expect(result).toEqual({
//             id: 1,
//             name_producr: 'Test product',
//             price_product: 40,
//             category_product: 'Test category',
//             descount_product: null,
//             brand_product:'sara'
//         })
//     })
//     it('should update a product', async () => {
//         const result = await store.updateProduct({
//             id: 1,
//            name_producr: 'Test product 2',
//            price_product: 40,
//            category_product: 'Test category',
//            descount_product: null,
//            brand_product:'sara',
//         })
//         expect(result).toEqual({
//             id: 1,
//             name_producr: 'Test product 2',
//            price_product: 40,
//            category_product: 'Test category',
//            descount_product: null,
//            brand_product:'sara',
//         })
//     })
//     it('should return a list of products', async () => {
//         const result = await store.getProducts()
//         expect(result).toEqual([
//             {
//               id: 1,
//               name_producr: 'Test product 2',
//               price_product: 40,
//               category_product: 'Test category',
//               descount_product: null,
//               brand_product:'sara'
//             },
//         ])
//     })
//     it('should return the correct product', async () => {
//         const result = await store.getProductById(1)
//         expect(result).toEqual({
//           id: 1,
//           name_producr: 'Test product 2',
//           price_product: 40,
//           category_product: 'Test category',
//           descount_product: null,
//           brand_product:'sara'
//         })
//     })
//     it('should get all the product', async () => {
//       await store.deleteProduct(1)
//       const result = await store.getProducts()
//       expect(result).toEqual([])
//   })
//     it('should getone the product', async () => {
//       await store.deleteProduct(1)
//       const result = await store.getProducts()
//       expect(result).toEqual([])
//   })
//     it('should update the product', async () => {
//       await store.deleteProduct(1)
//       const result = await store.getProducts()
//       expect(result).toEqual([])
//   })
//     it('should create the product', async () => {
//       await store.deleteProduct(1)
//       const result = await store.getProducts()
//       expect(result).toEqual([])
//   })
//     it('should delete the product', async () => {
//         await store.deleteProduct(1)
//         const result = await store.getProducts()
//         expect(result).toEqual([])
//     })
// })
