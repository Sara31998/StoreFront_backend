// the inter face of the product store

interface Product_Of_Store_Query {
    Create_Product?: string //create the product
    GetOne_Product?: string // get one of the product
    GetAll_Product?: string // get all the order
    UpDateOne_Product?: string // up date one of the product
    DeletOne_Product?: string // delet one from the product
  }
  
  // export the product qery to used in files
  export default Product_Of_Store_Query
  