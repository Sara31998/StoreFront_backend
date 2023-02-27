"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import of the json  web token
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import of the config file
const config_dotenv_1 = __importDefault(require("../config-dotenv"));
// import of the bcrypt packages
const bcrypt_1 = __importDefault(require("bcrypt"));
// impoert of the client modles
const user_table_moddles_1 = __importDefault(require("../database_of_modles/user_table_moddles"));
// the client modles
const client_models = new user_table_moddles_1.default();
// the bycrypt password secret
const pepper = config_dotenv_1.default.BCRPT_PASSWORD;
// the salte round
const saltRounds = parseInt(config_dotenv_1.default.SALT_ROUNDS);
// the usr controol to export 
class UsersController {
    // the function of the get users
    async getUsers(_req, res) {
        try {
            //the connect with the client model to the get users
            const users = await client_models.getUsers();
            // the statuse when the function is succesful
            res.status(200).json(users);
            //the rejectesd promise
        }
        catch (e) {
            // the statuse of catch when promis failded
            res.status(400).json(e);
        }
    }
    // the function of the get one of the user
    async getUserById(req, res) {
        try {
            //the connect with the client model to the get one user
            const user = await client_models.getUserById(parseInt(req.params.id));
            // if to check the user
            if (user) {
                // the statuse when the function is succesful
                res.status(200).json(user);
            }
            else {
                // the statuse when the function is faild
                res.status(404).json('user not found');
            }
            //the rejectesd promise
        }
        catch (e) {
            // @ts-ignore
            // the statuse of catch when promis failded
            res.status(400).json({ e: e.toString() });
        }
    }
    // the function of the create the client
    async createUser(req, res) {
        try {
            // the function of the if to check the username
            if (!(req.body.user_name || !req.body.yourpassword)) {
                // when the statuse is response
                return res.status(400).json({
                    error: 'Missing username or password',
                });
            }
            // the hashing password with the crypt 
            const hashedPassword = bcrypt_1.default.hashSync(req.body.password + pepper, saltRounds);
            //the connect with the client model to the create user
            const user = await client_models.createUser({
                user_name: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                your_email: req.body.your_email,
                your_password: hashedPassword, // the password of the client
            });
            // delet the password not return
            delete user.your_password;
            // the token of rhe password
            // @ts-ignore
            user.token = jsonwebtoken_1.default.sign(
            // the data will needed from client
            { id: user.id, user_name: user.user_name }, 
            // the token of the 
            config_dotenv_1.default.TOKEN_SECRET_USER);
            // the statuse when the function is succesful
            res.status(201).json(user);
            //the rejectesd promise
        }
        catch (e) {
            // the statuse of catch when promis failded
            return res.status(400).json(e);
        }
    }
    // the function of the update the client
    async updateUser(req, res) {
        try {
            // the if function to check the password and username
            if (!req.body.user_name || !req.body.password) {
                // return 400 to faild
                return res.status(400).json({
                    // if the eror in user data
                    error: 'Missing required parameters',
                });
            }
            //the connect with the client model to the update user
            const user = await client_models.updateUser({
                id: parseInt(req.params.id),
                user_name: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                your_email: req.body.your_email,
                your_password: req.body.password, // the password of the client
            });
            delete user.your_password;
            // the statuse when the function is succesful
            res.status(201).json(user);
            //the rejectesd promise
        }
        catch (e) {
            // the statuse of catch when promis failded
            res.status(400).json(e);
        }
    }
    // function of the delete the client
    async deleteUser(req, res) {
        try {
            //the connect with the client model to the delet 
            await client_models.deleteUser(parseInt(req.params.id));
            // the statuse when the function is succesful
            res.status(200).json({ status: `Deleted user ${req.params.id}` });
            //the rejectesd promise 
        }
        catch (e) {
            // the statuse of catch when promis failded
            res.status(500).json(e);
        }
    }
}
exports.default = UsersController;
