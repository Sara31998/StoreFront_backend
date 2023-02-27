"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import the modles of database
// import production order models
const ord_pro_table_modles_1 = __importDefault(require("../ord_pro_table_modles"));
// import order models
const order_table_modles_1 = __importDefault(require("../order_table_modles"));
// import the user models
const user_table_moddles_1 = __importDefault(require("../user_table_moddles"));
//import {Client_Store_Mod} from '../user_table_moddles'
// import Product models
const product_table_modlles_1 = __importDefault(require("../product_table_modlles"));
// The vriables create
// the vriable of the production order store
const pro_ord_store_model = new ord_pro_table_modles_1.default();
// the vriable of the produc store
const pro_store_model = new product_table_modlles_1.default();
// the vriable of the Client of  store
const client_store_model = new user_table_moddles_1.default();
// the vriable of the order store
const ord_store_model = new order_table_modles_1.default();
// the testing of Client
describe('the endpoint of the test model', () => {
    describe('exite the user method', () => {
        // the test of the create of the client
        it('Create Client  the Exite Methods', () => {
            // the expect to the create client is equal to define
            expect(client_store_model.createUser).toBeDefined();
        });
        // the test of the Get one of the client
        it('Get One Client the Exite Methods', () => {
            // the expect to the Get One client is equal to define
            expect(client_store_model.getUserById).toBeDefined();
        });
        // the test of the Update one of the client
        it('UpDate One Client the Exite Methods', () => {
            // the expect to the UpDate One client is equal to define
            expect(client_store_model.updateUser).toBeDefined();
        });
        // the test of the Get All of the client
        it('Get All Client the Exite Methods', () => {
            // the expect to the Get All client is equal to define
            expect(client_store_model.getUsers).toBeDefined();
        });
        // the test of the Delet one of the client
        it('Delet One Client the Exite Methods', () => {
            // the expect to the Delet One client is equal to define
            expect(client_store_model.deleteUser).toBeDefined();
        });
        // // the test of the Get order by  of the client id
        // it('Get order  by id Client the Exite Methods', () => {
        //   // the expect to the Get order by  client id  is equal to define
        //   expect(client_store_model.Get_Ord_Throw_Client_Id).toBeDefined()
        // })
        //  // the test of the Get order by  of the client id
        //  it('Get order  by id Client the Exite Methods', () => {
        //   // the expect to the Get order by  client id  is equal to define
        //   expect(client_store_model.Get_Pro_Throw_Client_Id).toBeDefined()
        // })
    });
    // // the testing of the models
    // // the testing of the client
    // describe('testing the client modle login', () => {
    //   // the client test
    //   const client1 = {
    //     user_name: 'sara4067', // user name
    //     first_name: 'Sara', // first name
    //     last_name: 'Gamal', // last name
    //     your_email: 'sg837121@gmail.com', // the email
    //     your_password: '123456', // the password
    //   } as Client_Type // equal to the client types
    //   // the order testing
    //   const Ord_Store1 = {
    //     quantity_order: 2, // the quantity of user need
    //     status_order: 'is not comblite', // the status of order
    //   } as Ord_Store // qual to the store ord
    //   // the production in store
    //   const Pro_Store1 = {
    //     name_producr: 'Jeanse', // the name of product
    //     descount_product: 10, // the descount
    //      brand_product: 'joda', // the product brand
    //     price_product: 100, // the price of production
    //     category_product: 'clouth', // the product category
    //   } as Pro_Store /// equal to production type
    //   const Pro_Ord = {} as Ord_Pro_Type // the production order
    //   beforeAll(async () => {
    //     // create the new client
    //     const newClient = await client_store_model.createUser(client1)
    //     client1.id = newClient.id // to equale the id of client
    //     Ord_Store1.id_user = client1.id as number // to connect between order and client
    //     // create new order
    //     const newOrd = await ord_store_model.Create_Ord_FromStore(Ord_Store1)
    //     // to equale the order id to new order id
    //     Ord_Store1.id = newOrd.id
    //     // create the new production
    //     const newPro = await pro_store_model.Create_ProductStore(Pro_Store1)
    //     // to equal to the production to new production id
    //     Pro_Store1.id = newPro.id
    //     // to production _  order
    //     Pro_Ord.orderstore = Ord_Store1.id
    //     Pro_Ord.productstore = Pro_Store1.id
    //     // the next lint it is not apper to the eslint disable
    //     // create the new production and order
    //     const new_pro_ord = await pro_ord_store_model.Create_Ord_Pro_Store(
    //       Pro_Ord
    //     )
    //   })
    //   // the function of the after all
    //   afterAll(async () => {
    //     // connect to the data base
    //     const connection = await database.connect()
    //     const ord_pro_dele = 'DELETE FROM oderofproductr' // DELET THE ORDER PRODUCTION
    //     await connection.query(ord_pro_dele)
    //     const ord_dele = 'DELETE FROM orderfromstore' // delet the order
    //     await connection.query(ord_dele)
    //     const pro_dele = 'DELETE FROM productstore' // delet the production
    //     await connection.query(pro_dele)
    //     const clientdele = 'DELETE FROM usersestore' // delet the users
    //     await connection.query(clientdele)
    //     // exite from the database
    //     connection.release()
    //   })
    //   // check the created client
    //   // it('if the client not exite the test methods create', async () => {
    //   //   // created client
    //   //   const ClientCreated = {
    //   //     user_name: 'sara4000', // user name
    //   //     first_name: 'Saras', // first name
    //   //     last_name: 'Gamals', // last name
    //   //     your_email: 'sg837121567@gmail.com', // the email
    //   //     your_password: 'g1234567', // the password
    //   //   } as Client_Type
    //   //   // add the client to created
    //   //   const clientisadd = await client_store_model.createUser(ClientCreated)
    //   //   // to equale the client id to new client
    //   //   ClientCreated.id = clientisadd.id
    //   //   // check if the name is found
    //   //  expect(clientisadd?.first_name).toBe(ClientCreated.first_name)
    //   //   // check if the last name found
    //   //  expect(clientisadd?.last_name).toBe(ClientCreated.last_name)
    //   //   // check if the user name is found
    //   //  expect(clientisadd?.user_name).toBe(ClientCreated.user_name)
    //   //   // check if the email is found
    //   //   expect(clientisadd?.your_email).toBe(ClientCreated.your_email)
    //   //   // check if the id is the same
    //   //   expect(clientisadd?.id).toBe(ClientCreated.id)
    //   // })
    //   it('should create a user', async () => {
    //     const result = await client_store_model.createUser({
    //       user_name: 'ssmith',
    //       first_name: 'Sallie',
    //       last_name: 'Test',
    //       your_email: 'sara@gmail.com',
    //       your_password: 'password123',
    //     })
    //     expect(result.user_name).toEqual('ssmith')
    // })
    //   // check the get one client
    //   it('if client exited test the method Get one', async () => {
    //     // the vriable of the get client
    //     const clientisgetone = await client_store_model.GetOne_Client(client1.id as number)
    //     // check if the name is found
    //     expect(clientisgetone.first_name).toBe(client1.first_name)
    //     // check if the last name found
    //     expect(clientisgetone.last_name).toBe(client1.last_name)
    //     // check if the user name is found
    //     expect(clientisgetone.user_name).toBe(client1.user_name)
    //     // check if the email is found
    //     expect(clientisgetone.your_email).toBe(client1.your_email)
    //   })
    //    // check the get on clint not exite
    //   it('if the client not exited the test method of get one', async () => {
    //     // the varibale of the get client not exited
    //     const clientgetnot = await client_store_model.GetOne_Client(100)
    //     // check the client not exited
    //     expect(clientgetnot).toBeUndefined()
    //   })
    //   // the test of get all method of clients in store
    //   it('test of the get all methode of all client ', async () => {
    //     // the vriable of the all clients in the store
    //     const clientsStore = await client_store_model.GetAll_Client()
    //     // check the number of client in store
    //     expect(clientsStore.length).toBe(2)
    //   })
    //   // the test the method production by id client
    //   it('if the client exited the test of the production ', async () => {
    //     // vriable of the connection product with client id
    //     const productdata = await client_store_model.Get_Pro_Throw_Client_Id(
    //       client1.id as number
    //     )
    //     // check if the product_name
    //     expect(productdata.name_producr).toBe(Pro_Store1.name_producr)
    //     // check if the descount_offer
    //     expect(productdata.descount_product).toBe(Pro_Store1.descount_product)
    //     // check if the product_price
    //     expect(productdata.price_product).toBe(Pro_Store1.price_product)
    //     // check if the producr_category
    //     expect(productdata.category_product).toBe(Pro_Store1.category_product)
    //   })
    //   // the test the method order by id client
    //   it('if the client exited the test of the order ', async () => {
    //     // vriable of the connection product with client id
    //     const orderdata = await client_store_model.Get_Ord_Throw_Client_Id(
    //       client1.id as number
    //     )
    //     // check the name of client has order
    //     expect(orderdata.user_name).toBe(client1.user_name)
    //     // check the quantity from order
    //    // expect(orderdata.quantity_user).toBe(Ord_Store1.quantity_order)
    //   })
    //    // the method to up date the client
    //    it('is the client need to update formation test this method', async () => {
    //     // the vriable of the client up date
    //     const clientUpdate: Client_Type = {
    //       ...client1,
    //       user_name: 'sa45ra23', // user name
    //       last_name: 'Gamalstgf', // last name
    //       your_email: 'sg897543@gmail.com', // the email
    //       your_password: '7890jhg', // the password
    //     }
    //     // created the new client with update data
    //     const updatenewclient = await client_store_model.UpDate_Client(
    //       clientUpdate
    //     )
    //     // check if the name is found
    //     expect(clientUpdate.first_name).toBe(updatenewclient.first_name)
    //     // check if the last name found
    //     expect(clientUpdate.last_name).toBe('Gamalstgf')
    //     // check if the user name is found
    //     expect(clientUpdate.user_name).toBe('sa45ra23')
    //     // check if the email is found
    //     expect(clientUpdate.your_email).toBe('sg897543@gmail.com')
    //     // check if the id is the same
    //     expect(clientUpdate.id).toBe(updatenewclient.id)
    //   })
    //   // the test of delet method from store
    //   it('test method of delet the client from store', async () => {
    //     // the vriable of the client is deleted
    //     const clientdelete = await client_store_model.Delet_One_Client(client1.id as number)
    //     // check if the user name is found
    //     expect(clientdelete.user_name).toBe('sa45ra23')
    //     // check if the name is found
    //     expect(clientdelete.first_name).toBe(client1.first_name)
    //     // check if the last name found
    //     expect(clientdelete.last_name).toBe('Gamalstgf')
    //     // check if the email is found
    //     expect(clientdelete.your_email).toBe('sg897543@gmail.com')
    //     // check if the id is the same
    //     expect(clientdelete.id).toBe(client1.id)
    //   })
    // })
    //  testing of the models 
    //testing of the client 
    describe('client  Model', () => {
        // create the client 
        it('test the  create a client', async () => {
            try {
                // the result of the modle connect
                const result = await client_store_model.createUser({
                    user_name: 'ssmith',
                    first_name: 'Sallie',
                    last_name: 'Test',
                    your_email: 'sara@gmail.com',
                    your_password: 'password123', // the password 
                });
                // check the name is the same
                expect(result.user_name).toEqual('ssmith');
                // the rejected of the promise
            }
            catch (err) {
                // tha massage of the error
                throw new Error(`Could not get users. Error: ${err}`);
            }
        });
        // update of the client 
        it('test the  update a client ', async () => {
            try {
                const users = await client_store_model.getUsers();
                const userId = users[0].id;
                // check by id of user 
                const result = await client_store_model.getUserById(userId);
                // check if the user name is tha same 
                expect(result.user_name).toEqual('ssmith');
            }
            catch (err) {
                throw new Error(`Could not get users. Error: ${err}`);
            }
        });
        // test the lists of the clients 
        it('test the return a list of client from store', async () => {
            try {
                // the result of the models
                const result = await client_store_model.getUsers();
                // i well create one user so it is 1
                expect(result.length).toEqual(1);
                // the rejective
            }
            catch (err) {
                // the rror massage
                throw new Error(`Could not get users. Error: ${err}`);
            }
        });
        // test the correct user 
        it('test the return the correct client', async () => {
            try {
                // the create of the user 
                const users = await client_store_model.getUsers();
                // user id 
                const userId = users[0].id;
                // check by id of user 
                const result = await client_store_model.getUserById(userId);
                // check if the user name is tha same 
                expect(result.user_name).toEqual('ssmith');
                // the rejective promise
            }
            catch (err) {
                // th massage of the error 
                throw new Error(`Could not get users. Error: ${err}`);
            }
        });
        // delet  the user to test 
        it('should delete the user', async () => {
            try {
                // chose the chient by id 
                let users = await client_store_model.getUsers();
                // the id of client to delet 
                const userId = users[0].id;
                // connect the client models
                await client_store_model.deleteUser(userId);
                users = await client_store_model.getUsers();
                // check the user list is equale to 0
                expect(users.length).toEqual(0);
                // the rejective promise
            }
            catch (err) {
                // the massage error
                throw new Error(`Could not get users. Error: ${err}`);
            }
        });
    });
});
