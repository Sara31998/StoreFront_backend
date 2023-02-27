// the bcrypt to used in token  to securty of password
import bcryptpass from 'bcrypt'
// import user from user types
import User_Type from '../types_of_database/user_store_types'
// import of the config vriables
import configfile from '../config-dotenv'
// import of the sql user from her file
import sql_database_user from '../database_of_folder/database_quary/user_table_query'
// import database
import database from '../database_of_folder/index_database';
import  data from '../database_of_folder/index_database';;
//import the product
import productstore_type from '../types_of_database/product_store_types'

// create the salt vriable to used in token
const salt_password = parseInt(configfile.SALT_ROUNDS as string, 10)
// create the hashpassword to used in token
const Passwod_Hash = (password: string) => {
  // create the password with hash
  bcryptpass.hashSync(password + configfile.BCRPT_PASSWORD, salt_password)
}
// // export of the store client of user
// export class StoreClient {
//   // // async function to create the cleint user
//   // async Create_Client(uc: User_Type): Promise<User_Type> {
//   //   try {
//   //     // connect with the database
//   //     const connectdatabase = await database.connect()
//   //     // the vriables in database
//   //     const columns = [
//   //       uc.user_name, // the user name of the client
//   //       uc.first_name, // the first name of client
//   //       uc.last_name, // the last name of client
//   //       uc.your_email, //the email of the client
//   //       Passwod_Hash(uc.your_password as string), // the password with hash and salt
//   //     ]
//   //     // create the result after connection
//   //     const result = await connectdatabase.query(
//   //       sql_database_user.Create_Store_User, columns
//   //     )
//   //     // exite from the connection
//   //     connectdatabase.release()
//   //     // return the result to optines the data
//   //     return result.rows[0]
//   //     // when promis is failed
//   //   } catch (error) {
//   //     // the error
//   //     throw new Error(`${error}`)
//   //   }
//   // }

//   async createUser(u: User_Type): Promise<User_Type> {
//     try {
//         // @ts-ignore
//         const connection = await pool.connect()
//         const sql =
//             'INSERT INTO usersestore (user_name, first_name, last_name, your_email, your_password) VALUES($1, $2, $3, $4, $5) RETURNING *'

//         const result = await connection.query(sql, [
//             u.user_name,
//             u.first_name,
//             u.last_name,
//             u.your_email,
//             u.your_password,
//         ])
//         connection.release()

//         return result.rows[0]
//     } catch (err) {
//         throw new Error(
//             `Could not add new user ${u.first_name}. Error: ${err}`
//         )
//     }
// }
//   // async function to get all the client user
//   async GetAll_Client(): Promise<User_Type[]> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection with data in columns
//       const result = await connectdatabase.query(sql_database_user.GetAll_Users)
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows
//       // when promis is failed
//     } catch (err) {
//       // the error
//       throw new Error(`${err}`)
//     }
//   }
//   // async function to get one client user
//   async GetOne_Client(id_client: number): Promise<User_Type> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_user.GetOne_Store_User,
//         [id_client]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used in update of the client user
//   async UpDate_Client(client: User_Type): Promise<User_Type> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // the vriables in database
//       const columns = [
//         // the user name of the client
//         client.user_name,
//         // the first name of client
//         client.first_name,
//         // the last name of client
//         client.last_name,
//         //the email of the client
//         client.your_email,
//         // the new password
//         client.your_password,
//         // the id of the client
//         client.id,
//       ]
//       //create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_user.UpdateOne_Store_User,
//         [
//           // the user name of the client
//           client.user_name,
//           // the first name of client
//           client.first_name,
//           // the last name of client
//           client.last_name,
//           //the email of the client
//           client.your_email,
//           // the new password
//           client.your_password,
//           // the id of the client
//           client.id,
//         ]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used  Delet one of client
//   async Delet_One_Client(id_client: number): Promise<User_Type> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_user.DeleteOne_Store_User,
//         [id_client]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used in authanticate
//   async Auth_Client(
//     client_email: string,
//     client_pass: string
//   ): Promise<User_Type | null> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // write the sql database of Auth
//       const AuthSql =
//         'SELECT your_password FROM usersestore WHERE your_email=($1)'
//       // create the result after connection
//       const result = await connectdatabase.query(AuthSql, [client_email])
//       // the if function if to certien the formation
//       if (result.rows.length) {
//         // the password in the result row
//         const { your_password } = result.rows[0]
//         // the passvalidate with bcrypt
//         const ifpassvalidate = bcryptpass.compareSync(
//           // the pass with the bcrypt
//           client_pass + configfile.BCRPT_PASSWORD,
//           your_password
//         )
//         // if the password validate
//         if (ifpassvalidate) {
//           // return all data if the password is validate
//           const sqlValidate =
//             'SELECT * FROM usersestore WHERE your_email = ($1)'
//           // the result of data is connection
//           const resultdata = await connectdatabase.query(sqlValidate, [
//             client_email,
//           ])
//           // the client from resultdata
//           const client: User_Type = resultdata.rows[0]
//           // return the client with data
//           return client
//         }
//       }
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return null
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used in Get order By User Id
//   async Get_Ord_Throw_Client_Id(id_client: number): Promise<User_Type> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_user.User_Where.Tow_From_Table,
//         [id_client]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used in get produc by user id
//   async Get_Pro_Throw_Client_Id(id_client: number): Promise<productstore_type> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_user.User_Where.Three_From_Table,
//         [id_client]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
// }

// // // export of the modules
//  export default StoreClient
/// exportof the user 
export class Client_Store {
  async getUsers(): Promise<User_Type[]> {
      try {
          // @ts-ignore
          // connect the database 
          const connection = await data.connect()
          // create the sql 
          const sqlgetall = 'SELECT * FROM usersestore'
          // connect tha data with database 
          const result = await connection.query(sqlgetall)
          // exite from database 
          connection.release()
           // return roes from database 
          return result.rows
          // the rejective of the promise
      } catch (err) {
        // the error 
          throw new Error(`Could not get users. Error: ${err}`)
      }
  }
//  the function of get user by id 
  async getUserById(id_client: number): Promise<User_Type> {
      try {
        // sql of the data in database 
          const sqluser = 'SELECT * FROM usersestore WHERE id=($1)'
          // @ts-ignore
          // connect to database 
          const connection = await data.connect()
          // connect tha data with tha database
          const result = await connection.query(sqluser, [id_client])
          // exite from database 
          connection.release()
           // returns the rows 
          return result.rows[0]
      } catch (err) {
        // error of the promis is not succesed
          throw new Error(`Could not find user ${id_client}. Error: ${err}`)
      }
  }
 /// the function of the createuser 
  async createUser(client: User_Type): Promise<User_Type> {
      try {
          // @ts-ignore
          // open the database 
          const connection = await data.connect()
          // the sql of the database 
          const sqlcreate =
              'INSERT INTO usersestore (user_name, first_name, last_name,your_email, your_password) VALUES($1, $2, $3, $4, $5) RETURNING *'
           // put the data in database 
          const result = await connection.query(sqlcreate, [
            client.user_name,  // the user name of client 
            client.first_name, // the first name of the client 
            client.last_name, // the last name of client 
            client.your_email, // the emial of the client 
            client.your_password, // the yuor password 
          ])
          // exite froom database 
          connection.release()
          // return the rows 
          return result.rows[0]
          // the rejective of promise
      } catch (err) {
        // the error
          throw new Error(
            // the error if the promise is faild 
              `Could not add new user ${client.first_name}. Error: ${err}`
          )
      }
  }
// ubdate of the user 
  async updateUser(client: User_Type): Promise<User_Type> {
      try {
          // @ts-ignore
          //connection of the database 
          const connection = await data.connect()
          // the sql of the database 
          const sql = `UPDATE usersestore SET user_name = $2, first_name = $3, last_name = $4,your_email = $5 your_password = $6 WHERE id = $1 RETURNING *`
           // the data in database 
          const result = await connection.query(sql, [
            client.id,  // the id f client is updata data 
            client.user_name,  // the username 
            client.first_name, // the firstname 
            client.last_name, // the last name 
            client.your_email, // youremail for user 
            client.your_password, // your password of client
          ])
          // exite from databas 
          connection.release()
          // return the rows
          return result.rows[0]
          // the catch to rjective 
      } catch (err) {
        // the massage of the error
          throw new Error(`Could not update user ${client.id}. Error: ${err}`)
      }
  }
// the delelet function of the client 
  async deleteUser(id_client: number): Promise<User_Type> {
      try {
          // @ts-ignore
          // connection of the database 
          const connection = await data.connect()
          // the sql of the data 
          const sqldelet = 'DELETE FROM usersestore WHERE id=($1)'
          // the result 
          const result = await connection.query(sqldelet, [id_client])
          // the exite from data 
          connection.release()
          // return the rows
          return result.rows[0]
          // the catch to rjective 
      } catch (err) {
        // the massage of the error
          throw new Error(`Could not delete user ${id_client}. Error: ${err}`)
      }
  }
}
// export of the modlles
export default Client_Store;

