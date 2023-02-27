// the import of the dotenv module to create the enviroment vriavles
import dotenvfile from 'dotenv'
// must do config to dotenv to create of  vriable
dotenvfile.config()
// the vriables to process.env
const {
  PORT, // the port of server
  NODE_ENV, // the type of database
  POSTGRES_HOST, // the postgres database host
  POSTGRES_PROT, // the postgress database port
  POSTGRES_DATABASE, // the name of database
  POSTGRES_DATABASE_TEST, // the name of database test
  POSTGRES_USER, // the name of user
  POSTGRES_PASSWORD_DATABASE, // the database password
  BCRPT_PASSWORD, // the bcrypt of password of user
  SALT_ROUNDS, // the salt to create the token
  TOKEN_SECRET_USER, // the token of the secret password of user
} = process.env

// then export all the vriable to used in the any file
export default {
  // port : PORT,
  // host : POSTGRES_HOST,
  // databaseport: POSTGRES_PROT,
  // database: NODE_ENV === 'dev' ? POSTGRES_DATABASE : POSTGRES_DATABASE_TEST,
  // userdatabase: POSTGRES_USER,
  // passworddatabase: POSTGRES_PASSWORD_DATABASE,
  // papper: BCRPT_PASSWORD,
  // saltpassword: SALT_ROUNDS,
  // tokensecretuser: TOKEN_SECRET_USER,
  PORT,
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_PROT,
  POSTGRES_DATABASE,
  POSTGRES_DATABASE_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD_DATABASE,
  BCRPT_PASSWORD,
  SALT_ROUNDS,
  TOKEN_SECRET_USER,
}
