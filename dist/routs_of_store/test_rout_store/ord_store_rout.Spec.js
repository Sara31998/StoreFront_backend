"use strict";
// // import the files
// // import database
// import database from '../../database_of_folder/index_database'
// // import of user types
// import Client_Type from '../../types_of_database/user_store_types'
// //import of usr models
// import Client_Mod from '../../database_of_modles/user_table_moddles'
// //import the app of the routs
// import app from '../index'
// // import of the order type
// import Order_Type from '../../types_of_database/order_from_store'
// // import of the order models
// import Order_Mod from '../../database_of_modles/order_table_modles';
// // importof the test of endpoit
// import supertest from 'supertest'
// // vriables to used
// //the vriable of client
// const client_models = new Client_Mod()
// // the vriable of the test endpoint
// const request_Server = supertest(app)
// //the vriable of the order models
// const order_models = new Order_Mod()
// // the vriable of token
// let tokenclient: string
// // the test of the endpoint of the order
// describe('Test of the order rout from client in end point', () => {
//   //the test of order
//   const order1 = {
//     quantity_order: 2, // the quantity of the order
//     status_order: 'Not Comblited', // the statues of user
//   } as Order_Type
//   // the client owner of the order
//   const client1_owner = {
//     user_name: 'sara4067', // user name
//     first_name: 'Sara', // first name
//     last_name: 'Gamal', // last name
//     your_email: 'sg837121@gmail.com', // the email
//    // your_password: '123456', // the password
//   } as Client_Type
//   // used the before all in the testing
//   beforeAll(async (done) => {
//     // create new client owner
//     const New_Client = await client_models.createUser(client1_owner)
//     // the id to tha same in two
//     client1_owner.id = New_Client.id
//     // the order is the same id \
//     order1.id_user = client1_owner.id as number
//     // create the new order
//     const new_oder = await order_models.Create_Ord_FromStore(order1)
//     // the id in two orde is the same
//     order1.id = new_oder.id
//     done()
//   })
//   // used the after all in the testing
//   afterAll(async (done) => {
//     // connect to database
//     const connection = await database.connect()
//     // to write the sql of user
//     const sql_data_client = 'DELETE FROM usersestore'
//     // to write the sql of order
//     const sql_data_ord = 'DELETE FROM orderfromstore'
//     // CONNECT THE SQL TO DATA BASE
//     await connection.query(sql_data_client)
//     await connection.query(sql_data_ord)
//     //  exite the sql from data base
//     connection.release()
//     done()
//   })
//   // the test of the authanticate
//   describe('test the Authanticte method of the client in store', () => {
//     // it('the Authanticate to get token should able to ', async () => {
//     //   // the response to this test
//     //   const res = await request_Server
//     //     //  the routs it to test
//     //     .post('/client/ClientAuth')
//     //     // the set method
//     //     .set('Content-type', 'application/json')
//     //     // the data to send
//     //     .send({
//     //       your_email:'sg837121@gmail.com', // the email
//     //      // your_password: '123456', // the password
//     //     })
//     //   //check of the statue of the srver
//     //   expect(res.status).toBe(200)
//     //   // check of the email
//     //   expect(client1_owner.your_email).toBe(res.body.Client_Type.your_email)
//     //   // check of the id
//     //   expect(client1_owner.id).toBe(res.body.Client_Type.id)
//     //   // the check of the token
//     //   tokenclient = res.body.tokenclient
//     // })
//   })
//   // test of the croud
//   describe('Test of the Croud Operation api ', () => {
//       // test of the created Authanticate
//       it('create Authanticate of client to should return the order', async (done) => {
//         // create the new order test
//         const neworder = {
//           quantity_order: 4, // the quantity of the order
//           status_order: 'comblited', // the statues of user
//           id_user: client1_owner.id, // the id of the user
//         } as Order_Type
//         // create the respons
//         const res = await request_Server
//           .post('/orderstore/CreateOrder') // the post of router order
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//           .send(neworder) // the data to appear
//         // create vriables to used
//         const { quantity_order, status_order, id_user } = res.body.data
//         // the check of the status of server
//         expect(res.status).toBe(200)
//         // check of the quantity
//         expect(neworder.quantity_order).toBe(quantity_order)
//         //check of the statuse
//         expect(neworder.status_order).toBe(status_order)
//         // check of the user id
//         expect(neworder.id_user).toBe(id_user)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//         done();
//       }, 250)
//       //testing the get all of endpoint
//       it('test the endpoint of the Get All return list of the product', async done => {
//         // the respons
//         const res = await request_Server
//           .get('/orderstore/GetAllOrder') // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//         // check of the lenghth of data
//         expect(res.body.data.length).toBe(2)
//         done()
//       },250)
//       // test the get one of end point
//       it('test the endpoint of the Get One return list of the product', async (done) => {
//         // the respons
//         const res = await request_Server
//           .get(`/orderstore/GetOneOrder/:${client1_owner.id}`) // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//         // vriable of the order
//         const { quantity_order, status_order, id_user, id } = res.body.data
//         // check of the id of the order
//         expect(order1.id).toBe(id)
//         //check of user id
//         expect(order1.id_user).toBe(id_user)
//         //check of the quantity of order
//         expect(order1.quantity_order).toBe(quantity_order)
//         //check of the statuse
//         expect(order1.status_order).toBe(status_order)
//         done()
//       }, 250)
//       //testing the Update of endpoint
//       it('test the endpoint of the Update return of the product', async (done) => {
//         // the update order
//         const updateorder = {
//           quantity_order: 6, // the quantity of the order
//           status_order: 'not comblitaed', // the statues of user
//           id_user: client1_owner.id, // the id of the user
//         } as Order_Type
//         // the respons
//         const res = await request_Server
//           .patch('/orderstore/UpDateOrder') // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//           // check of the sen method
//           .send(updateorder)
//           done()
//       }, 250)
//       //testing the delet one of endpoint
//       it('test the endpoint of delet the  product', async (done) => {
//         // the respons
//         const res = await request_Server
//           .delete('/orderstore/DeletOrder') // the get method to the server
//           .set('Content-type', 'application/json') // the set method
//           .set('ClientAuth', `${tokenclient}`) // the set method
//           // check of the sen method
//           .send({ id_user: order1.id_user })
//         // create vriables to used
//         const { quantity_order, status_order, id_user, id } = res.body.data
//         // check of the quantity
//         expect(order1.quantity_order).toBe(quantity_order)
//         //check of the statuse
//         expect(order1.status_order).toBe(status_order)
//         // check of the user id
//         expect(order1.id_user).toBe(id_user)
//         // check the id
//         expect(order1.id).toBe(id)
//         done()
//       }, 250)
//   })
// })
// import of the super test pachage 
const supertest_1 = __importDefault(require("supertest"));
// import of app from index
const index_1 = __importDefault(require("../../index"));
// import of the token well be created 
const authanticatetoken_1 = require("../../utiles_database_files/authanticatetoken");
// the end point test of the application 
const requestserver = (0, supertest_1.default)(index_1.default);
//the token of password 
const tokenpass = (0, authanticatetoken_1.createToken)(1, 'bearer');
// tests of the order from store
describe(' the test of the orders from store  controllers: ', () => {
    // test the create order 
    it('/orderstore/create test the create new order  ', (done) => {
        const data = {
            id_user: 1,
            status_order: 'new',
        };
        // request server in application
        requestserver
            // the post request in server 
            .post('/api/orderstore/create')
            // the set request in server
            .set('Authorization', `Bearer ${tokenpass}`)
            //send request in server 
            .send(data)
            .expect('Content-Type', 'application/json')
            // check the statuse of the request 
            .expect(200)
            // check the data return fron the server
            .expect({
            id: 1,
            id_user: 1,
            status_order: 'new', // the statuse of the order
        });
        done();
    });
    // test add the product to the order 
    it('orderstore/add-product/:id test the add a product to an order', (done) => {
        const data = {
            productstore: 1,
            quantity_order: 10, // the quantity of the order 
        };
        // request server in application
        requestserver
            // the request of the server 
            .post('/api/orderstore/add-product/1')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send of the datain server
            .send(data)
            .expect('Content-Type', 'application/json')
            // check the statuse of the request
            .expect(200)
            // check the data return fron the server
            .expect({
            id: 1,
            orderstore: 1,
            productstore: 1,
            quantity_order: 10, // the quantity of the order 
        });
        done();
    });
    // the test if the order not coplited bu id user 
    it('/orderstore/create failed if id_user is not fount in parameters', (done) => {
        const data = {
            status_order: 'new', // the statuse of the order
        };
        // request server in application
        requestserver
            // the post request to enter data 
            .post('/api/orderstore/create')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send request of data 
            .send(data)
            // check the statuse of the request
            .expect(400)
            // check the massage return fron the server
            .expect({
            error: 'Missing one or more required parameters',
        });
        done();
    });
    //// test the order not complited by data 
    it('/orderstore/create should fail if status is not included in parameters', (done) => {
        const data = {
            id_user: 1, // the id of the user owner of the order
        };
        // request server in application
        requestserver
            // the post request to the create 
            .post('/api/orderstore/create')
            // the set request in server 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send of data
            .send(data)
            // check the statuse of the request
            .expect(400)
            // check the data return fron the server
            .expect({
            error: 'Missing one or more required parameters',
        });
        done();
    });
    // test get all order from store 
    it('/orderstore should get all orders', (done) => {
        // request server in application
        requestserver
            // the gt request of the server 
            .get('/api/orderstore')
            .expect('Content-Type', 'application/json')
            // check the statuse of the request
            .expect(200)
            // check the data return fron the server
            .expect({
            id: 1,
            id_user: 1,
            status_order: 'new', // the statuse of the order
        });
        done();
    });
    // test to select of ordr from store
    it('/orderstore/:id show a order from store', (done) => {
        // request server in application
        requestserver
            // the get request in server 
            .get('/api/orderstore/1')
            // the set request of the server 
            .set('Authorization', `Bearer ${tokenpass}`)
            .expect('Content-Type', 'application/json')
            // check the statuse of the request
            .expect(200)
            // check the data return fron the server
            .expect({
            id: 1,
            id_user: 1,
            status_order: 'new', // the statuse of the order
        });
        done();
    });
    // the test of update order 
    it('/orderstore  update of order from store', (done) => {
        // request server in application
        const data = {
            id: 1,
            user_id: 1,
            status_order: 'in progress', // the statuse of the order
        };
        requestserver
            // the get request in server 
            .put('/api/orderstore/1')
            // the set request in server
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send request to the data 
            .send(data)
            .expect('Content-Type', 'application/json')
            // check the statuse of the request
            .expect(200)
            // check the data return fron the server
            .expect({
            id: 1,
            id_user: 1,
            status_order: 'in progress', // the statuse of the order
        });
        done();
    });
    // test of the delet the order
    it('/orderstore/:id test the delete an order from store by id', (done) => {
        // request server in application
        requestserver
            // the delete request to the server 
            .delete('/api/orderstore/1')
            .set('Authorization', `Bearer ${tokenpass}`)
            // check the statuse of the request
            .expect(200)
            // check the data return fron the server
            .expect({
            id: 1,
            id_user: 1,
            status_order: 'in progress', // the statuse of the order
        });
        done();
    });
    // test the order not completted
    it('/orderstore/current-order/:id  show order from store with status_order not completed', (done) => {
        // request server in application
        requestserver
            // the request get of the order 
            .get('/api/orderstore/current-order/1')
            // set request in server
            .set('Authorization', `Bearer ${tokenpass}`)
            .expect('Content-Type', /json/)
            // check the statuse of the request
            .expect(200)
            // check the data return fron the server 
            .expect({
            id: 1,
            id_user: 1,
            status_order: 'in progress', // the statuse of the order 
        });
        done();
    });
});
