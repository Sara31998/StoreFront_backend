"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
// import the jwt to the tokent 
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import config to the used  vriables 
const config_dotenv_1 = __importDefault(require("../config-dotenv"));
// create the vriables of the tokensecret
const tokenSecretpass = config_dotenv_1.default.TOKEN_SECRET_USER;
// export of the token to usd in files 
const createToken = (iduser, user_name) => {
    return jsonwebtoken_1.default.sign({ iduser, user_name }, tokenSecretpass);
};
exports.createToken = createToken;
