type orderfromstore = {
    id?: number // the id of the order
    id_user: number // the id of the client
    quantity_order: number // the quantity of the client
    status_order: string // the statuse of the user
  }
  // export of the order from store to used in files
  export default orderfromstore