"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_dotenv_1 = __importDefault(require("../config-dotenv"));
const tokenSecret = config_dotenv_1.default.TOKEN_SECRET_USER;
const createJWTToken = (id, username) => {
    return jsonwebtoken_1.default.sign({ id, username }, tokenSecret);
};
exports.createJWTToken = createJWTToken;
