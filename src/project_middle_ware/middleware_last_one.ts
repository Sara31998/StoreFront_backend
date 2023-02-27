// import of the express to used request and response
import { NextFunction, Request, Response } from 'express'
// variable to used to response to not found site
const found_is_Not = (_req: Request, res: Response, next: NextFunction) => {
  // the next is not disible beacuse the eslint modules
  res.status(404).json('The website is not founded') // the statuse of error and the massage is appear
}
// export of the vriables to used in files
export default found_is_Not
