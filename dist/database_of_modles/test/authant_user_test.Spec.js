"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports files
// import database
const index_database_1 = __importDefault(require("../../database_of_folder/index_database"));
// import user models
const user_table_moddles_1 = __importDefault(require("../user_table_moddles"));
/// create the primary vriables of user models
const client_model = new user_table_moddles_1.default();
// test of authanticate model
describe('test of authanticat modle for client', () => {
    // test of this modle
    describe('the test modle to exite', () => {
        // // test of authanticat to shoud found in client
        // it('must the client has Authanticate modles', () => {
        //   // check the client modle is defined
        //   expect(client_model.Auth_Client).toBeDefined()
        // })
    });
    // test the logic of authanticat
    describe('hogic of the Authanticat', () => {
        // the vriables of client 1
        const client1 = {
            user_name: 'sara40',
            first_name: 'ahmed',
            last_name: 'ahmed',
            your_email: 'sg837121@gmail.com',
            your_password: '123456', // the password
        };
        // used before all in test
        beforeAll(async () => {
            // the vriables of the new client
            const newclient = await client_model.createUser(client1);
            // the id of the client is tha same
            client1.id = newclient.id;
        });
        // used the after all
        afterAll(async () => {
            // connection to database
            const connection = await index_database_1.default.connect();
            // create the sql
            const sqlAutho = 'DELETE FROM usersestore';
            // CONNECT THE SQL TO DATABASE
            await connection.query(sqlAutho);
            // exited the database
            connection.release();
        });
        // the method of authanticate
        //it('the method of authonticat must return the client authonticat', async () => {
        //   // the vriables of authanticate
        //   const clientAutho = await client_model.(
        //     client1.your_email,
        //     client1.your_password,
        //   )
        //   // check the first name of client
        //   expect(clientAutho?.first_name).toBe(client1.first_name) 
        //   // check the Last name of client
        //   expect(clientAutho?.last_name).toBe(client1.last_name)
        //   // check the id of client
        //   expect(clientAutho?.id).toBe(client1.id)
        //   // check the email of client
        //   expect(clientAutho?.your_email).toBe(client1.your_email)
        //   // check the user name of client
        //   expect(clientAutho?.user_name).toBe(client1.user_name)
        // });
        // test the method of authanticate
        it('test the method of the authanticate should return null if user  exite', async () => {
            // const newClient = await client_model.Auth_Client('57895', 'gamal')
            // check the data
            // expect(newClient).toBe(null)
        });
    });
});
