//The Middleware
// import the helmate middleware to Security
import helmetMiddle from 'helmet'
// import the morgan middleware to loggin
import morganMiddl from 'morgan'
// import the ratelimit middleware to limit of loggin
import rateLimit from 'express-rate-limit'
// the modle of the sever
import express, { Application } from 'express'
//import config to used the vriables
import configfile from './config-dotenv'
// the handdling of the error in the site
import ErrorHandle from './project_middle_ware/middleware_handlling_error'
// the handling last middleware of site
import lastMiddleware from './project_middle_ware/middleware_last_one'
// the router for store
import routstore from './routs_of_store';
// import cors middleware
import cors from 'cors';
// the cors middle ware 
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}
// The app of project
const appofproject: Application = express()
// the middlewares of express
appofproject.use(express.json())
appofproject.use(express.urlencoded({extended: true}));
// the middleware of helmate
appofproject.use(helmetMiddle())
// the middleware of morgan
appofproject.use(morganMiddl('common'))
// the cors middle ware
appofproject.use(cors(corsOptions));

// the middleware of the rate limit express
const RateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minit the limits
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message:
    'Oh You Can Not Visted This Site Now, You exceeded the limit of loggin the site',
  statusCode: 404,
})
// used the rate limit of the loggin
appofproject.use(RateLimit)
//  used the middleware of handling Error
appofproject.use(ErrorHandle)
// used the last middleware
appofproject.use(lastMiddleware)
// used the routes
appofproject.use('/api',routstore)

// the port of the server runnig
const port: number = parseInt(configfile.PORT as string, 10) || 3000
// the listen of the application
appofproject.listen(port, () => {
  // Runing of the server
  console.log(`http://localhost:${port}/`)
})
// export the app to used in any file
export default appofproject

