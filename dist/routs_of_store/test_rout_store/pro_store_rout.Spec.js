"use strict";
// // import the files
// // import database
// import database from '../../database_of_folder/index_database'
// // import of user types
// import Client_Type from '../../types_of_database/user_store_types'
// //import of usr models
// import Client_Mod from '../../database_of_modles/user_table_moddles';
// //import the app of the routs
// import app from '../index'
// // import of the order type
// import Product_Type from '../../types_of_database/product_store_types'
// // import of the order models
// import Product_Mod from '../../database_of_modles/product_table_modlles';
// // importof the test of endpoit
// import supertest from 'supertest'
// // vriables to used
// //the vriable of client
// const client_models = new Client_Mod()
// // the vriable of the test endpoint
// const request_Server = supertest(app)
// //the vriable of the order models
// const product_models = new Product_Mod()
// // the vriable of token
// let tokenclient: string
// // the test of the endpoint of the product
// describe('Test of the order rout from client in end point', () => {
//   //the test of order
//   const product1 = {
//     name_producr: 'Jeanse', // the name of product
//     descount_product: 10, // the descount
//      brand_product: 'joda', // the product brand
//     price_product: 100, // the price of production
//     category_product: 'clouth', // the product category
//   } as Product_Type
//   // the client owner of the order
//   const client1_owner = {
//     user_name: 'sara4067', // user name
//       first_name: 'Sara', // first name
//       last_name: 'Gamal', // last name
//       your_email: 'sg837121@gmail.com', // the email
//      // your_password: '123456', // the password
//   } as Client_Type
//   // used the before all in the testing
//   beforeAll(async () => {
//     // create new client owner
//     const New_Client = await client_models.createUser(client1_owner)
//     // the id to tha same in two
//     client1_owner.id = New_Client.id
//     // create the new order
//     const new_product = await product_models.createProduct(product1)
//     // the id in two orde is the same
//     product1.id = new_product.id
//   })
//   // used the after all in the testing
//   afterAll(async () => {
//     // connect to database
//     const connection = await database.connect()
//     // to write the sql of user
//     const sql_data_client = 'DELETE FROM usersestore'
//     // to write the sql of order
//     const sql_data_ord = 'DELETE FROM productstore'
//     // CONNECT THE SQL TO DATA BASE
//     await connection.query(sql_data_client)
//     await connection.query(sql_data_ord)
//     //  exite the sql from data base
//     connection.release()
//   })
//   // the test of the authanticate
//   describe('test the Authanticte method of the client in store', () => {
//     it('the Authanticate to get token should able to ', async () => {
//       // the response to this test
//       const res = await request_Server
//         //  the routs it to test
//         .post('/client/ClientAuth')
//         // the set method
//         .set('Content-type', 'application/json')
//         // the data to send
//         .send({
//           your_email: 'sg837121@gmail.com', // the email
//           your_password: '123456', // the password
//         })
//       //check of the statue of the srver
//       expect(res.status).toBe(200)
//       // check of the email
//       expect(client1_owner.your_email).toBe(res.body.Client_Type.your_email)
//       // check of the id
//       expect(client1_owner.id).toBe(res.body.Client_Type.id)
//       // the check of the token
//       tokenclient = res.body.tokenclient
//     })
//   })
//   // test of the croud
//   describe('Test of the Croud Operation api ', () => {
//       // test of the created Authanticate
//       it('create Authanticate of client to should return the product', async () => {
//         // create the new order test
//         const newproduct = {
//           name_producr: 'dress', // the th name of product
//           descount_product: null, // if the descount found
//           brand_product: 'sara', // the brand of the product
//           price_product: 100, //the price of the product
//           category_product: 'clouth woman', //the category of the product
//         } as Product_Type
//         // create the respons
//         const res = await request_Server
//           .post('/productstore/CreateProduct') // the post of router product
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//           .send(newproduct) // the data to appear
//         // create vriables to used
//         const {
//           name_producr,
//           descount_product,
//           brand_product,
//           price_product,
//           category_product,
//         } = res.body.data
//         // the check of the status of server
//         expect(res.status).toBe(200)
//         // check of the name of product
//         expect(newproduct.name_producr).toBe(name_producr)
//         //check of the descount
//         expect(newproduct.descount_product).toBe(descount_product)
//         // check of the product brand
//         expect(newproduct.brand_product).toBe(brand_product)
//         //check the product price
//         expect(newproduct.price_product).toBe(price_product)
//         //check the product of categry
//         expect(newproduct.category_product).toBe(category_product)
//       })
//       //testing the get all of endpoint
//       it('test the endpoint of the Get All return list of the product', async () => {
//         // the respons
//         const res = await request_Server
//           .get('/productstore/GetAllProduct') // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//         //check of the statues of server
//         expect(res.status).toBe(200)
//         // check of the lenghth of data
//         expect(res.body.data.length).toBe(2)
//       })
//       // test the get one of end point of product
//       it('test the endpoint of the Get One return  of the product', async () => {
//         // the respons
//         const res = await request_Server
//           .get(`/productstore/GetOneProduction/:${client1_owner.id}`) // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//         // vriable of the order
//         const {
//           id,
//           name_producr,
//           brand_product,
//           descount_product,
//           price_product,
//           category_product,
//         } = res.body.data
//         //check the status of server
//         expect(res.status).toBe(200)
//         // check of the id of the product
//         expect(product1.id).toBe(id)
//         //check of name of the product
//         expect(product1.name_producr).toBe(name_producr)
//         //check of the product descount offer
//         expect(product1.descount_product).toBe(descount_product)
//         //check of the product brand
//         expect(product1.brand_product).toBe(brand_product)
//         //check of the product price
//         expect(product1.price_product).toBe(price_product)
//         // check of the product categry
//         expect(product1.category_product).toBe(category_product)
//       })
//       //testing the Update of endpoint
//       it('test the endpoint of the Update return of the product', async () => {
//         // the update product
//         const updateproduct = {
//           ...product1,
//           product_name: 'skirt',
//         } as Product_Type
//         // the respons
//         const res = await request_Server
//           .patch('/productstore/UpDateProduct') // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//           // check of the send method to the data of product
//           .send(updateproduct)
//         // vriable of the order
//         const {
//           id,
//           brand_product,
//           descount_product,
//           price_product,
//           category_product,
//         } = res.body.data
//         //check the status of server
//         expect(res.status).toBe(200)
//         // check of the id of the product
//         expect(updateproduct.id).toBe(id)
//         //check of name of the product
//         expect(updateproduct.name_producr).toBe('skirt')
//         //check of the product descount offer
//         expect(updateproduct.descount_product).toBe(descount_product)
//         //check of the product brand
//         expect(updateproduct.brand_product).toBe(brand_product)
//         //check of the product price
//         expect(updateproduct.price_product).toBe(price_product)
//         // check of the product categry
//         expect(updateproduct.category_product).toBe(category_product)
//       })
//       //testing the delet one of endpoint
//       it('test the endpoint of delet the  product', async () => {
//         // the respons
//         const res = await request_Server
//           .delete('/productstore/DeletProduct') // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//           // check of the sen method
//           .send({ id: product1.id })
//         // vriable of the order
//         const {
//           id,
//           product_name,
//           brand_product,
//           descount_product,
//           price_product,
//           category_product,
//         } = res.body.data
//         //check the status of server
//         expect(res.status).toBe(200)
//         // check of the id of the product
//         expect(product1.id).toBe(id)
//         //check of name of the product
//         expect(product_name).toBe('skirt')
//         //check of the product descount offer
//         expect(product1.descount_product).toBe(descount_product)
//         //check of the product brand
//         expect(product1.brand_product).toBe(brand_product)
//         //check of the product price
//         expect(product1.price_product).toBe(price_product)
//         // check of the product categry
//         expect(product1.category_product).toBe(category_product)
//       })
//   })
// })
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // import the files
//import the endpoint test of files
const supertest_1 = __importDefault(require("supertest"));
// import the application of server 
const index_1 = __importDefault(require("../../index"));
// import the token of password 
const authanticatetoken_1 = require("../../utiles_database_files/authanticatetoken");
// connect of the supertest with applixcation
const requestserver = (0, supertest_1.default)(index_1.default);
// the tokent of the password 
const tokenpass = (0, authanticatetoken_1.createToken)(1, 'bearer');
// the teat of the product controller 
describe('product in store to  controllers: ', () => {
    // test of the create client 
    it(' return a new client after to created', (done) => {
        const data = {
            name_producr: 'Test',
            price_product: 40.0,
            category_product: 'category a', // the category of production in store
        };
        // the request of the server 
        requestserver
            // the post request of the server
            .post('/api/products/create')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send request
            .send(data)
            .expect('Content-Type', /json/)
            // check of the statues the request
            .expect(200)
            // check of the data return from request server
            .expect({
            id: 1,
            name_producr: 'Test',
            price_product: '$40.00',
            category_product: 'category a', // the category of production in store
        });
        done();
    });
    // test of the create product faild if name not found
    it('test of the create product faild if name not found', (done) => {
        const data = {
            name_producr: 'Test',
            price_product: 40.0,
            category_product: 'category b', // the category of production in store
        };
        // the request of the server 
        requestserver
            // the get request of the server
            .post('/api/products/create')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send request 
            .send(data)
            // check of the statues the request
            .expect(400)
            // check of the massage return from request server
            .expect({
            error: 'Error: Product name is required',
        });
        done();
    });
    // test of the get all product in store in list 
    it('test of the get all product in store in list', (done) => {
        // the request of the server 
        requestserver
            // the get request of the server
            .get('/api/products')
            .expect('Content-Type', /json/)
            // check of the statues the request
            .expect(200)
            // check of the data return from request server
            .expect({
            id: 1,
            name_producr: 'Test',
            price_product: 40.0,
            category_product: 'category a', // the category of production in store
        });
        done();
    });
    // test of the get one of the product by id 
    it('test of the get one of the product by id ', (done) => {
        // the request of the server 
        requestserver
            // the get request of the server 
            .get('/api/products/1')
            .expect('Content-Type', /json/)
            // check of the statues the request
            .expect(200)
            // check of the data return from request server 
            .expect({
            id: 1,
            name_producr: 'Test',
            price_product: 40.0,
            category_product: 'category a', // the category of production in store
        });
        done();
    });
    // test of the update prodiuct in store 
    it('test of the update prodiuct in store endpoint', (done) => {
        // the data vriables of the formation 
        const data = {
            name_producr: 'Test edited',
            price_product: 50.0, // the priceof product in store 
        };
        // the request of the server 
        requestserver
            // the put request of the server 
            .put('/api/products/1')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send request of data 
            .send(data)
            // check the jsone 
            .expect('Content-Type', /json/)
            // check of the statues the request
            .expect(200)
            // check the data well return from server request 
            .expect({
            id: 1,
            name_producr: 'Test edited',
            price_product: 50.0,
            category_product: 'category a', // the category of production in store
        });
        done();
    });
    /// the test othe delet product from stor 
    it('the test othe delet product from store  its id', (done) => {
        // the request of the server 
        requestserver
            // delete request in server 
            .delete('/api/products/1')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // check of the statues the request 
            .expect(404)
            .then(() => {
            // check of the server of the delete 
            requestserver.get('/api/products').expect({});
        });
        done();
    });
});
