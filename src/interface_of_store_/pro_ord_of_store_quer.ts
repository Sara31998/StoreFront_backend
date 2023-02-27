
  // the interface of order of product from stor

interface Product_Order_Store {
    Insert_Ord_Pro: string //create the order by order id
    Get_Ord_By_OrderId: string // get order from order id
    GetAll_Ord_Pro: string // get all orders of product
    UpDate_Ord_By_OrderId: string // up date order from order id
    Delet_Ord_By_OrderId: string // delet order from order id
  }
  
  // export of the product order store
  export default Product_Order_Store