"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import config to used the vriables
const config_dotenv_1 = __importDefault(require("../config-dotenv"));
// import the jwt from his modles to used
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// the function of Hendle of authorized Error
const authorizedErrorHandle = (next) => {
    // the error equal to the error interface to used the statuse
    const error = new Error('Login Error please tray again to loggin !');
    // the statuse of the error is 401
    error.status_Of_Error = 401;
    // the next function to error
    next(error);
};
// the user authanticat to token
const userAuthanticat = (req, res, Next) => {
    try {
        // the vriable of the header Athonticate
        const headerAutho = req.get('Authorization');
        // the vriable to used the jwt to token the user
        const userautherd = jsonwebtoken_1.default.verify(headerAutho, config_dotenv_1.default.TOKEN_SECRET_USER);
        // if the user authanticate is true
        if (userautherd) {
            Next();
        }
        else {
            authorizedErrorHandle(Next);
        }
    }
    catch (err) {
        // when the promis is not
        authorizedErrorHandle(Next);
    }
};
// wxport the user Authanticate to used in the files
exports.default = userAuthanticat;
