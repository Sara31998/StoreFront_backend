// the interface of the order query
interface Order_Store_Query {
    Create_Order: string //create the order
    GetOne_Order: string // get one from the order
    GetAll_Order: string // get all the order
    UpDateOne_Order: string // up date one from the order
    DeletOne_Order: string // delet one from the order
  }
  // export the order store query to use in any folder
  export default Order_Store_Query