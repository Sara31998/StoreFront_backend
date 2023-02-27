// the import config to used the vriables
import configfile from '../config-dotenv'
// import the pool to the pg modules used in database
import { Pool } from 'pg'
// dfine the database of store as string
// the determine of the type of database
let DATABASESTORE: string
if (configfile.NODE_ENV == 'test') {
  // if the node_env = test so the database is sara_store_test
  DATABASESTORE = configfile.POSTGRES_DATABASE_TEST as unknown as string
} else {
  // or the defult is sara_store
  DATABASESTORE = configfile.POSTGRES_DATABASE as unknown as string
}
// then used the pool with the database
const database = new Pool({
  // the port of database
  port: parseInt(configfile.POSTGRES_PROT as string, 10),
  // the host of the database
  host: configfile.POSTGRES_HOST,
  // the type of data base and choose this
  database: DATABASESTORE,
  // the user of the database
  user: configfile.POSTGRES_USER,
  // the password of tha database
  password: configfile.POSTGRES_PASSWORD_DATABASE,
})
// database if the error
database.on('error', (error) => {
  throw new Error(`${error}`) // throw the error when the database return error
})
//export the database to used in tables
export default database





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

