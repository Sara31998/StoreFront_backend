// import the files from the express modle
import { Response, Request, NextFunction } from 'express'
// import error to used in files
import Error_interface from '../interface_of_store_/error_used_infiles';
// import config to used the vriables
import configfile from '../config-dotenv'
// import the jwt from his modles to used
import jwt from 'jsonwebtoken'
// the function of Hendle of authorized Error
const authorizedErrorHandle = (next: NextFunction) => {
  // the error equal to the error interface to used the statuse
  const error: Error_interface = new Error(
    'Login Error please tray again to loggin !'
  )
  // the statuse of the error is 401
  error.status_Of_Error = 401
  // the next function to error
  next(error)
}
// the user authanticat to token
const userAuthanticat = (req: Request, res: Response, Next: NextFunction) => {
  try {
    // the vriable of the header Athonticate
    const headerAutho: string = req.get('Authorization') as unknown as string
    // the vriable to used the jwt to token the user
    const userautherd = jwt.verify(
      headerAutho,
      configfile.TOKEN_SECRET_USER as unknown as string
    )
    // if the user authanticate is true
    if (userautherd) {
      Next()
    } else {
      authorizedErrorHandle(Next)
    }
  } catch (err) {
    // when the promis is not
    authorizedErrorHandle(Next)
  }
}
// wxport the user Authanticate to used in the files
export default userAuthanticat
