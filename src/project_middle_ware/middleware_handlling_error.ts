// the error interface to used
import Error_interface from '../interface_of_store_/error_used_infiles'
// // import express to used request and respons and next
import { Request, Response, NextFunction } from 'express'
// // the function of the handle error
const HendleError = (
  err: Error_interface, // the error from the error interface
  _req: Request, // the Response from the error
  res: Response, // the request and not used
  // the next is not disible beacuse the eslint modules
  next: NextFunction
) => {
  // the massge appear in tha error
  const message_error =
    err.message_Error || 'Ohhhhh You can not visit this site sorry !'
  //  the status of the error
  const status_error = err.status_Of_Error || 404
  // then the response is with this vriables
  res.status(status_error).json({ message: message_error })
}
// //export the handle error to used in files
export default HendleError
