// // import of user where query to used in this file
import userWhere from './stores_where_query';
// // the interface of user query

interface User_Query_Store {
  Create_Store_User: string //create the user
  GetOne_Store_User: string // get one from the user
  GetAll_Users: string // get all the user
  UpdateOne_Store_User: string // up date one from the user
  DeleteOne_Store_User: string // delet one from the user
  User_Where: userWhere // the user where find
}

// // export of the user query to used in files_
export default User_Query_Store