"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//The Middleware
// import the helmate middleware to Security
const helmet_1 = __importDefault(require("helmet"));
// import the morgan middleware to loggin
const morgan_1 = __importDefault(require("morgan"));
// import the ratelimit middleware to limit of loggin
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// the modle of the sever
const express_1 = __importDefault(require("express"));
//import config to used the vriables
const config_dotenv_1 = __importDefault(require("./config-dotenv"));
// the handdling of the error in the site
const middleware_handlling_error_1 = __importDefault(require("./project_middle_ware/middleware_handlling_error"));
// the handling last middleware of site
const middleware_last_one_1 = __importDefault(require("./project_middle_ware/middleware_last_one"));
// the router for store
const routs_of_store_1 = __importDefault(require("./routs_of_store"));
// import cors middleware
const cors_1 = __importDefault(require("cors"));
// the cors middle ware 
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
// The app of project
const appofproject = (0, express_1.default)();
// the middlewares of express
appofproject.use(express_1.default.json());
appofproject.use(express_1.default.urlencoded({ extended: true }));
// the middleware of helmate
appofproject.use((0, helmet_1.default)());
// the middleware of morgan
appofproject.use((0, morgan_1.default)('common'));
// the cors middle ware
appofproject.use((0, cors_1.default)(corsOptions));
// the middleware of the rate limit express
const RateLimit = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Oh You Can Not Visted This Site Now, You exceeded the limit of loggin the site',
    statusCode: 404,
});
// used the rate limit of the loggin
appofproject.use(RateLimit);
//  used the middleware of handling Error
appofproject.use(middleware_handlling_error_1.default);
// used the last middleware
appofproject.use(middleware_last_one_1.default);
// used the routes
appofproject.use('/api', routs_of_store_1.default);
// the port of the server runnig
const port = parseInt(config_dotenv_1.default.PORT, 10) || 3000;
// the listen of the application
appofproject.listen(port, () => {
    // Runing of the server
    console.log(`http://localhost:${port}/`);
});
// export the app to used in any file
exports.default = appofproject;
