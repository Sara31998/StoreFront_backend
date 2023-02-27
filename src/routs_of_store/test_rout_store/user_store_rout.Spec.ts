// // import the files
// // import database
// import database from '../../database_of_folder/index_database'
// // import of user types
// import Client_Type from '../../types_of_database/user_store_types'
// //import of usr models
// import Client_Mod from '../../database_of_modles/user_table_moddles'
// //import the app of the routs
// import app from '../index';
// // import of the order type
// import Order_Type from '../../types_of_database/order_from_store'
// // import of the order models
// import Order_Mod from '../../database_of_modles/order_table_modles'
// // importof the test of endpoit
// import supertest from 'supertest'
// // import of product type
// import Product_Type from '../../types_of_database/product_store_types'
// // import of product modles
// import Product_Mod from '../../database_of_modles/product_table_modlles'
// // import of order product store type
// import Ord_Pro_Type from '../../types_of_database/order_product_store'
// //import of order production modles
// import Ord_Pro_Mod from '../../database_of_modles/ord_pro_table_modles'
// // vriables to used
// //the vriable of client
// const client_models = new Client_Mod()
// // the vriable of the test endpoint
// const request_Server = supertest(app)
// //the vriable of the order models
// const order_models = new Order_Mod()
// //the vriables of the product models
// const product_models = new Product_Mod()
// //the vriables of the order production modles
// const ord_pro_models = new Ord_Pro_Mod()
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
//     your_password: 'sara123456789', // the password
//   } as Client_Type
//   // the product test
//   const product1 = {
//     name_producr: 'jenies', // the th name of product
//     descount_product: null, // if the descount found
//     brand_product: 'sara', // the brand of the product
//     price_product: 400, //the price of the product
//     category_product: 'clouth', //the category of the product
//   } as Product_Type
//   // the vriables of the order product
//   const ord_pro1 = {} as Ord_Pro_Type
//   // used the before all in the testing
//   beforeAll(async (done) => {
//     // create new client owner
//     const New_Client = await client_models.createUser(client1_owner)
//     // the id to tha same in two
//     client1_owner.id = New_Client.id
//     // create the new order
//     const new_oder = await order_models.Create_Ord_FromStore(order1)
//     // the id in two orde is the same
//     order1.id = new_oder.id
//     // create the new product
//     const new_product = await product_models.Create_ProductStore(product1)
//     // the id in the product is the same
//     new_product.id = product1.id
//     // the order product id of order
//     ord_pro1.orderstore = order1.id
//     // the order product id of product
//     ord_pro1.productstore = product1.id
//     // eslint is desible
//     const new_ord_pro = await ord_pro_models.Create_Ord_Pro_Store(ord_pro1)
//     done()
//   }, 250)
//   // used the after all in the testing
//   afterAll(async (done) => {
//     // connect to database
//     const connection = await database.connect()
//     // to write the sql of user
//     const sql_delet_client = 'DELETE FROM usersestore'
//     // to write the sql of order
//     const sql_delet_ord = 'DELETE FROM orderfromStore'
//     // to write sql of the product
//     const sql_data_ord = 'DELETE FROM productStore'
//     // to write the order production
//     const aql_delet_ord_pro = 'DELETE FROM oderOFproductr'
//     // CONNECT THE SQL TO DATA BASE
//     await connection.query(sql_delet_client)
//     await connection.query(sql_delet_ord)
//     await connection.query(sql_data_ord)
//     await connection.query(aql_delet_ord_pro)
//     //  exite the sql from data base
//     connection.release()
//     done()
//   }, 250)
//   // the test of the authanticate
//   describe('test the Authanticte method of the client in store', () => {
//     it('the Authanticate to get token should able to ', async (done) => {
//       // the response to this test
//       const res = await request_Server
//         //  the routs it to test
//         .post('/client/ClientAuth')
//         // the set method
//         .set('content-type', 'app/json')
//         // the data to send
//         .send({
//           your_email: 'sg837121@gmail.com', // the email
//           your_password: 'sara123456789', // the password
//         })
//       //check of the statue of the srver
//       expect(res.status).toBe(200)
//       // check of the email
//       expect(client1_owner.your_email).toBe(res.body.Client_Type.your_email)
//       // check of the id
//       expect(client1_owner.id).toBe(res.body.Client_Type.id)
//       // the check of the token
//       tokenclient = res.body.tokenclient
//       done()
//     },250)
//     // the authanticate is faild
//     it('the authanticate is faild ', async () => {
//       // the respons
//       const res = await request_Server
//         //  the routs it to test
//         .post('/client/ClientAuth')
//         // the set method
//         .set('content-type', 'app/json')
//         // the data to send
//         .send({
//           your_email: 'sg837121@gmail.com', // the email
//           your_password: 'sara123456789', // the password
//         })
//       // the status of the faild server
//       expect(res.status).toBe(401)
//     })
//   })
//   // the test of the advanced level
//   describe('test the operation of api in the advanced level', () => {
//     // test of the get order by user id
//     it('test the method of get order by id of the client in endpoint', async (done) => {
//       // the respons
//       const response = await request_Server
//         .post('/client/GetOrdByClintId') // the post of router order
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//         .send({ id: client1_owner.id }) // the data to appear
//       // the vriables of this test
//       const { quantity_user, status_user, user_name } = response.body.data
//       // check the status of the server
//       expect(response.status).toBe(200)
//       //check user  name of client
//       expect(client1_owner.user_name).toBe(user_name)
//       //check the quantity of order
//       expect(order1.quantity_order).toBe(quantity_user)
//       //check the status of order
//       expect(order1.status_order).toBe(status_user)
//       done()
//     }, 250)
//     //test the Get product by id of client
//     it('test the method of get product by id of the client in endpoint', async (done) => {
//       // the respons
//       const response = await request_Server
//         .post('/client/GetProByClientId') // the post of router order
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//         .send({ id: client1_owner.id }) // the data to appear
//       // the vriables of this test
//       const { descount_offer, product_price, user_name, producr_category } =
//         response.body.data
//       // check the status of the server
//       expect(response.status).toBe(200)
//       //check user  name of client
//       expect(client1_owner.user_name).toBe(user_name)
//       //check the quantity of order
//       expect(product1.descount_product).toBe(descount_offer)
//       //check the status of order
//       expect(product1.price_product).toBe(product_price)
//       //check the category ofthe product
//       expect(product1.category_product).toBe(producr_category)
//       done()
//     }, 250)
//   })
//   // the test of the croud
//   describe('Test of the Croud Operation api ', () => {
//     // test of the created Authanticate
//     it('create Authanticate of client to should return the client', async (done) => {
//       // create the new order test
//       const New_Client = {
//         user_name: 'sara40', // user name
//         first_name: 'Sar', // first name
//         last_name: 'Gam', // last name
//         your_email: 'sg8371@gmail.com', // the email
//         your_password: 'sara1234589', // the password
//       } as Client_Type
//       // create the respons
//       const res = await request_Server
//         .post('/client/ClientCreat') // the post of router order
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//         .send(New_Client) // the data to appear
//       // create vriables to used
//       const { first_name, last_name, user_name, your_email } = res.body.data
//       // the check of the status of server
//       expect(res.status).toBe(200)
//       // check of the first name
//       expect(New_Client.first_name).toBe(first_name)
//       //check of the last_name
//       expect(New_Client.last_name).toBe(last_name)
//       // check of the user name
//       expect(New_Client.user_name).toBe(user_name)
//       //check the email of client
//       expect(New_Client.your_email).toBe(your_email)
//       done()
//     },)
//     //testing the get all of endpoint
//     it('test the endpoint of the Get All return list of the client', async (done) => {
//       // the respons
//       const res = await request_Server
//         .get('/client/ClientGetAll') // the get method to the server
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//       //check of the status of the server
//       expect(res.status).toBe(200)
//       // check of the lenghth of data
//       expect(res.body.data.length).toBe(2)
//       done()
//     }, 250)
//     // test the get one of end point
//     it('test the endpoint of the Get One return one of client', async (done) => {
//       // the respons
//       const res = await request_Server
//         .get(`/client/ClientGetOne/:${client1_owner.id}`) // the get method to the server
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//       // create vriables to used
//       const { first_name, last_name, user_name, your_email } = res.body.data
//       // the check of the status of server
//       expect(res.status).toBe(200)
//       // check of the first name
//       expect(client1_owner.first_name).toBe(first_name)
//       //check of the last_name
//       expect(client1_owner.last_name).toBe(last_name)
//       // check of the user name
//       expect(client1_owner.user_name).toBe(user_name)
//       //check the email of client
//       expect(client1_owner.your_email).toBe(your_email)
//       done()
//     }, 250)
//     //testing the Update of endpoint
//     it('test the endpoint of the Update return of the client', async (done) => {
//       // the update of email of the client
//       const newemail = 'sara.gamal123@gail.com' as string
//       // the respons
//       const res = await request_Server
//         .patch('/client/UpDateClient') // the get method to the server
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//         // check of the sen method
//         .send({
//           user_name: 'sara4067', // user name
//           first_name: 'Sara', // first name
//           last_name: 'Gamal', // last name
//           your_email: newemail, // the email
//          // your_password: 'sara123456789', // the password
//         })
//       // create vriables to used
//       const { first_name, last_name, user_name, your_email } = res.body.data
//       // the check of the status of server
//       expect(res.status).toBe(200)
//       // check of the first name
//       expect(client1_owner.first_name).toBe(first_name)
//       //check of the last_name
//       expect(client1_owner.last_name).toBe(last_name)
//       // check of the user name
//       expect(client1_owner.user_name).toBe(user_name)
//       //check the email of client
//       expect(newemail).toBe(your_email)
//       done()
//     }, 250)
//     //testing the delet one of endpoint
//     it('test the endpoint of delet the  product', async (done) => {
//       // the respons
//       const res = await request_Server
//         .delete('/client/DeletClient') // the get method to the server
//         .set('content-type', 'app/json') // the set method
//         .set('ClientAuth', `${tokenclient}`) // the set method
//         // check of the sen method
//         .send({ id: client1_owner.id })
//       // create vriables to used
//       const { first_name, last_name, user_name } = res.body.data
//       // the check of the status of server
//       expect(res.status).toBe(200)
//       // check of the first name
//       expect(client1_owner.first_name).toBe(first_name)
//       //check of the last_name
//       expect(client1_owner.last_name).toBe(last_name)
//       // check of the user name
//       expect(client1_owner.user_name).toBe(user_name)
//       done()
//     }, 250)
//   })
// })


// import { UserStore } from '../../database_of_modles/user_table_moddles'

// const store = new UserStore()

// describe('User Model', () => {
//     it('should create a user', async () => {
//         const result = await store.createUser({
//             user_name: 'ssmith',
//             first_name: 'Sallie',
//             last_name: 'Test',
//             your_email: 'sara@gmail.com',
//             your_password: 'password123',
//         })
//         expect(result.user_name).toEqual('ssmith')
//     })

//     // it('should update a user', async () => {
//     //     const users = await store.getUsers()
//     //    // const userId = users[0].id

//     //     const result = await store.updateUser({
//     //        // id: userId,
//     //         user_name: 'ssmith',
//     //         first_name: 'Sallie',
//     //         last_name: 'Test',
//     //         your_email: 'sara@gmail.com',
//     //         your_password: '678iu',
//     //     })
//     //     expect(result.user_name).toEqual('ssmith')
//     // })

//     it('should return a list of users', async () => {
//         const result = await store.getUsers()
//         expect(result.length).toEqual(1)
//     })

//     it('should return the correct user', async () => {
//         const users = await store.getUsers()
//         const userId = users[0].id as number

//         const result = await store.getUserById(userId)
//         expect(result.user_name).toEqual('ssmith')
//     })

//     it('should delete the user', async () => {
//         let users = await store.getUsers()
//         const userId = users[0].id as number

//         await store.deleteUser(userId)
//         users = await store.getUsers()

//         expect(users.length).toEqual(0)
//     })
// })

// import of the supertest of application 
import supertest from 'supertest'
// import application from index
import application from '../../index'
// import of the token 
import { createToken } from '../../utiles_database_files/authanticatetoken'
// the test of end point of application
const request_Server = supertest(application)
// connect with the token 
const tokenpass: string = createToken(1, 'bearer')
// test the client controller 
describe('client controllers: ', () => {
    // test the created of the client 
    it('/client/create should return a client', (done) => {
        const data = {
            user_name: 'ssmith',  // the user name of client
            first_name: 'Sally', // the first name of the client
            last_name: 'Smothers', // the last name of the client
            you_password: 'test1234', // the pasword
        }
        // the request of supertest 
        request_Server
        //test the create of client 
            .post('/api/client/create')
            // send the data 
            .send(data)
            .expect('Content-Type', 'application/json')
            // the statuse of this test 
            .expect(201)
            // check the data 
            .expect({
                id: 1,
                user_name: 'ssmith',  // the user name of the client 
                first_name: 'Sally',  // the first name of the client 
                last_name: 'Smothers',  // the last name of the client 
            })
        done();
    })
/// the test if the client not send
    it('/client/create should fail if  client  is not sent', (done) => {
        // the data of the client 
        const data = {
            first_name: 'Sally',  // the first name of the client 
            last_name: 'Smothers', // the last name of client 
            your_password: 'test1234', // the password of the client 
        }
        // the request of server 
        request_Server
        // the post linke 
            .post('/api/client/create')
            .set('Authorization', `Bearer ${tokenpass}`)
            .send(data)   // the send of data 
            .expect('Content-Type', 'application/json')
            // the statuse if the clkient faild 
            .expect(400)
            // the check of of the error 
            .expect({
                error: 'Missing user_name or your_password',
            })
        done()
    })
// the check of the jek Authanticate 
    it('/client/create should fail if required password  Authanticate check the jsonwebtoken is not sent', (done) => {
        const data = {
            user_name: 'ssmith',  // the user name of the client
            first_name: 'Sally', // the first name of the client
            last_name: 'Smothers', // the last name of the client
        }
        request_Server
        // the request server 
            .post('/api/client/create')
            // sent request 
            .set('Authorization', `Bearer ${tokenpass}`)
            .send(data)
            .expect('Content-Type', 'application/json')
            // check the statuse 
            .expect(400)
            // check the error 
            .expect({
                // the error massage
                error: 'Missing username or password',
            })
        done()
    })
// the get alll of the client 
    it('/client should return all client ', (done) => {
        request_Server
        // the request of the server 
            .get('/api/client')
            // the set of the server 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the statuse is check
            .expect(200)
            .expect('Content-Type', 'application/json')
            // check the data return 
            .expect([
                {
                    id: 1,  // the fid of the client
                    user_name: 'ssmith',  // the user name of the client
                    first_name: 'Sally',  // the first name of the client
                    last_name: 'Smothers',  // the last name of the client
                },
            ])
        done()
    })
// the test of the show client
    it('/client/:id should show a client', (done) => {
        request_Server
        // the request of the server 
            .get('/api/client/1')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            .expect('Content-Type', 'application/json')
            // the statuse of request 
            .expect(200)
            // check of the data return
            .expect({
                id: 1,  // the id of the client 
                first_name: 'Sally',  // the first name of the client
                last_name: 'Smothers',  // the last name of the client
                your_password_digest: 'test1234',  // the password of the client
            })
        done();
    })
// test of ubdate the client information 
    it('/client/:id should update a client', (done) => {
        // the information of client 
        const data = {
            user_name: 'madison',  // the user name of the client 
            first_name: 'Madison',  // the first name of the client
            last_name: 'Smith',  // the last name of the client
            your_password_digest: 'test1234',  // the password of the client
        }
        request_Server
        // the put request of api
            .put('/api/client/1')
            // the set request 
            .set('Authorization', `Bearer ${tokenpass}`)
            // the send data 
            .send(data)
            .expect('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            // the check of statuse 
            .expect(200)
            // check of the data return 
            .expect({
                id: 1,
                user_name: 'madison',  // the user name of the client
                first_name: 'Madison',  // the first name of the client
                last_name: 'Smith',  // the last name of the client
                your_password_digest: 'test1234',  // the password of the client
            })
        done();
    })
// test the delet of client 
    it('/client/:id should delete a client', (done) => { 
        // the request to delet of the client to statues is 200
        request_Server.delete('/api/client/1').expect(200).expect({
            // the data is return is 
            status: 'Deleted user 1',
        })
        done();
    })
})


