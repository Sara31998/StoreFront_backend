// imports file
// import of the token
import jwtToken from 'jsonwebtoken'
//import of the enviroment env
import configfile from '../config-dotenv'
// import of user from user type
import Client_Type from '../types_of_database/user_store_types'
// import of exprees and req  and res from express
import { Request, Response, NextFunction } from 'express'
// import of the user modle
//import Client_Mod from '../database_of_modles/user_table_moddles';
// the vriable of user modle
//const client_models = new Client_Mod()
//the export of the async function create
// export const ClientCreate = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client
//     const createclient: Client_Type = await client_models.createUser(
//       req.body
//     )
//     // the respons of this
//     res.status(200).json(createclient)
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// //the export of the async function Get one
// export const ClientGetOne = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client
//     const GrtOneclient: Client_Type = await client_models.getUserById(
//       parseInt(req.params.id as unknown as string, 10)
//     )
//     // the respons of this
//     res.status(200).json({
//       statuse: 'success',
//       data: GrtOneclient,
//       massage: 'Get Client',
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// // the export of the async function Get All
// export const ClientGetAll = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client
//     const Getallclient: Client_Type[] = await client_models.getUsers()
//     // the respons of this
//     res.status(200).json({
//       statuse: 'success',
//       data: Getallclient,
//       massage: 'Get All Client',
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// // the export of the async function Update one
// export const ClientUpdate = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client Update
//     const UpDateclient: Client_Type = await client_models.createUser(
//       req.body
//     )
//     // the respons of this
//     res.status(200).json({
//       statuse: 'success',
//       data: UpDateclient,
//       massage: 'Updated Client',
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// // the export of the async function Delet one
// export const ClientDelet = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client
//     const Deletclient: Client_Type = await client_models.deleteUser(
//       req.body.id
//     )
//     // the respons of this
//     res.status(200).json({
//       statuse: 'success',
//       data: Deletclient,
//       massage: 'Delet Client',
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// // the export of the Auth Function of client
// export const ClientAuth = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client
//     const Authclient = await client_models.Auth_Client(
//       req.body.your_password,
//       req.body.your_email
//     )
//     // create the token
//     const tokenClient = jwtToken.sign(
//       { Authclient },
//       configfile.TOKEN_SECRET_USER as unknown as string
//     )
//     // if the token true or false
//     if (!Authclient) {
//       return res.status(401).json('you can not login it is failed')
//     }
//     // the respons of this
//     return res.status(200).json({
//       client: Authclient,
//       thetoken: tokenClient,
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// // the get order by user id
// export const ClientGetOrderById = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client Update
//     const GetOrdclient=
//       await client_models.Get_Ord_Throw_Client_Id(req.body.id)
//     // the respons of this
//     res.status(200).json({
//       data: GetOrdclient,
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }
// // the get product by user id
// export const ClientGetProductById = async (
//   req: Request,
//   res: Response,
//   nex: NextFunction
// ) => {
//   // if the promis is true
//   try {
//     // create vriables  to client Update
//     const GeProductclient = await client_models.Get_Pro_Throw_Client_Id(
//       req.body.id
//     )
//     // the respons of this
//     res.status(200).json({
//       data: GeProductclient,
//     })
//     // if the promis is error
//   } catch (error) {
//     nex(error)
//   }
// }

// import of the express to test the rout 
import express from 'express'
// import of the json  web token
import jwt from 'jsonwebtoken'
// import of the config file
import config_file from '../config-dotenv'
// import of the bcrypt packages
import bcryptpass from 'bcrypt'
// impoert of the client modles
import Client_Mod from '../database_of_modles/user_table_moddles';
// the client modles
const client_models = new Client_Mod()
// the bycrypt password secret
const pepper: string = config_file.BCRPT_PASSWORD as string
// the salte round
const saltRounds: number = parseInt(config_file.SALT_ROUNDS as string)
// the usr controol to export 
export default class UsersController {
    // the function of the get users
    async getUsers(_req: express.Request, res: express.Response) {
        try {
            //the connect with the client model to the get users
            const users = await client_models.getUsers()
            // the statuse when the function is succesful
            res.status(200).json(users)
            //the rejectesd promise
        } catch (e) {
            // the statuse of catch when promis failded
            res.status(400).json(e)
        }
    }
// the function of the get one of the user
    async getUserById(req: express.Request, res: express.Response) {
        try {
            //the connect with the client model to the get one user
            const user = await client_models.getUserById(parseInt(req.params.id))
            // if to check the user
            if (user) {
                // the statuse when the function is succesful
                res.status(200).json(user)
            } else {
                // the statuse when the function is faild
                res.status(404).json('user not found')
            }
            //the rejectesd promise
        } catch (e) {
            // @ts-ignore
            // the statuse of catch when promis failded
            res.status(400).json({ e: e.toString() })
        }
    }
// the function of the create the client
    async createUser(req: express.Request, res: express.Response) {
        try {
            // the function of the if to check the username
            if (!(req.body.user_name || !req.body.yourpassword)) {
                // when the statuse is response
                return res.status(400).json({
                    error: 'Missing username or password',
                })
            }
              // the hashing password with the crypt 
            const hashedPassword = bcryptpass.hashSync(
                req.body.password + pepper,
                saltRounds
            )
            //the connect with the client model to the create user
            const user = await client_models.createUser({
                user_name: req.body.username as string,  // the user name of the client
                first_name: req.body.first_name as string,  // the first name of the client
                last_name: req.body.last_name as string,  // the last name of the client
                your_email: req.body.your_email as string,  // the emaile of the client
                your_password: hashedPassword,  // the password of the client
            })
            // delet the password not return
            delete user.your_password
            // the token of rhe password
            // @ts-ignore
            user.token = jwt.sign(
                // the data will needed from client
                { id: user.id, user_name: user.user_name },
                // the token of the 
                config_file.TOKEN_SECRET_USER as string
            )
            // the statuse when the function is succesful
            res.status(201).json(user)
            //the rejectesd promise
        } catch (e) {
            // the statuse of catch when promis failded
            return res.status(400).json(e)
        }
    }
// the function of the update the client
    async updateUser(req: express.Request, res: express.Response) {
        try {
            // the if function to check the password and username
            if (!req.body.user_name || !req.body.password) {
                // return 400 to faild
                return res.status(400).json({
                    // if the eror in user data
                    error: 'Missing required parameters',
                })
            }
            //the connect with the client model to the update user
            const user = await client_models.updateUser({
                id: parseInt(req.params.id as string),  // the id of the client
                user_name: req.body.username as string,  // the user name of the client
                first_name: req.body.first_name as string, // the first name of the client
                last_name: req.body.last_name as string, // the last name of the client
                your_email: req.body.your_email as string, // the emaile of the client
                your_password: req.body.password as string, // the password of the client
            })
            delete user.your_password
            // the statuse when the function is succesful
            res.status(201).json(user)
            //the rejectesd promise
        } catch (e) {
            // the statuse of catch when promis failded
            res.status(400).json(e)
        }
    }
// function of the delete the client
    async deleteUser(req: express.Request, res: express.Response) {
        try {
            //the connect with the client model to the delet 
            await client_models.deleteUser(parseInt(req.params.id as string))
            // the statuse when the function is succesful
            res.status(200).json({ status: `Deleted user ${req.params.id}` })
            //the rejectesd promise 
        } catch (e) {
            // the statuse of catch when promis failded
            res.status(500).json(e)
        }
    }
}

