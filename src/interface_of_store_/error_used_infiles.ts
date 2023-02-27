//the interface of the error
interface Error {
    status_Of_Error?: number // the statuse of the store
    name?: string // the name of the error
    message_Error?: string // the message of the error
    stack_Error?: string // the stack of the error
  }
  // the export of the error to eas to use the error
  export default Error
  