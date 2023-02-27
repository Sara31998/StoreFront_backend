"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// the import config to used the vriables
const config_dotenv_1 = __importDefault(require("../config-dotenv"));
// import the pool to the pg modules used in database
const pg_1 = require("pg");
// dfine the database of store as string
// the determine of the type of database
let DATABASESTORE;
if (config_dotenv_1.default.NODE_ENV == 'test') {
    // if the node_env = test so the database is sara_store_test
    DATABASESTORE = config_dotenv_1.default.POSTGRES_DATABASE_TEST;
}
else {
    // or the defult is sara_store
    DATABASESTORE = config_dotenv_1.default.POSTGRES_DATABASE;
}
// then used the pool with the database
const database = new pg_1.Pool({
    // the port of database
    port: parseInt(config_dotenv_1.default.POSTGRES_PROT, 10),
    // the host of the database
    host: config_dotenv_1.default.POSTGRES_HOST,
    // the type of data base and choose this
    database: DATABASESTORE,
    // the user of the database
    user: config_dotenv_1.default.POSTGRES_USER,
    // the password of tha database
    password: config_dotenv_1.default.POSTGRES_PASSWORD_DATABASE,
});
// database if the error
database.on('error', (error) => {
    throw new Error(`${error}`); // throw the error when the database return error
});
//export the database to used in tables
exports.default = database;
// import dotenv from 'dotenv'
// import { Pool } from 'pg'
// dotenv.config()
// const {
//     POSTGRES_HOST,
//     POSTGRES_DATABASE,
//     POSTGRES_DATABASE_TEST,
//     POSTGRES_USER,
//     POSTGRES_PASSWORD_DATABASE,
//     NODE_ENV,
// } = process.env
// let pool
// console.log(NODE_ENV)
// if (NODE_ENV === 'test') {
//     pool = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DATABASE_TEST,
//         user: POSTGRES_USER,
//         password: POSTGRES_PASSWORD_DATABASE,
//     })
// }
// if (NODE_ENV === 'dev') {
//     pool = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DATABASE,
//         user: POSTGRES_USER,
//         password: POSTGRES_PASSWORD_DATABASE,
//     })
// }
// export default pool
