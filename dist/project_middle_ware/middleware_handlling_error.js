"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // the function of the handle error
const HendleError = (err, // the error from the error interface
_req, // the Response from the error
res, // the request and not used
// the next is not disible beacuse the eslint modules
next) => {
    // the massge appear in tha error
    const message_error = err.message_Error || 'Ohhhhh You can not visit this site sorry !';
    //  the status of the error
    const status_error = err.status_Of_Error || 404;
    // then the response is with this vriables
    res.status(status_error).json({ message: message_error });
};
// //export the handle error to used in files
exports.default = HendleError;
