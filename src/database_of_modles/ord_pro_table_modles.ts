// import the sql of the database
import sql_database_store from '../database_of_folder/database_quary/ord_of_pro_table_query';
// import of the database
import database from '../database_of_folder/index_database';
// import of the production types
import ord_pro_store from '../types_of_database/order_product_store'
// the class of order from store
class Order_Product_Sara_Store {
  // create the Order_Production
  async Create_Ord_Pro_Store(
    Ord_Pro_store: ord_pro_store
  ): Promise<ord_pro_store> {
    try {
      // connect with the database
      const connectdatabase = await database.connect()
      // the vriables in database
      const columns = [
        Ord_Pro_store.orderstore, // the order from user
        Ord_Pro_store.productstore, // the product from store
      ]
      // create the result after connection
      const result = await connectdatabase.query(
        sql_database_store.Insert_Ord_Pro,
        columns
      )
      // exite from the connection
      connectdatabase.release()
      // return the result to optines the data
      return result.rows[0]
      // when promis is failed
    } catch (error) {
      // the error
      throw new Error(`${error}`)
    }
  }
  // asunc function to get one Order_Production
  async GetOne_Ord_Pro_Store(id_Ord_Pro: number): Promise<ord_pro_store> {
    try {
      // connect with the database
      const connectdatabase = await database.connect()
      // create the result after connection
      const result = await connectdatabase.query(
        sql_database_store.Get_Ord_By_OrderId,
        [id_Ord_Pro]
      )
      // exite from the connection
      connectdatabase.release()
      // return the result to optines the data
      return result.rows[0]
      // when promis is failed
    } catch (error) {
      // the error
      throw new Error(`${error}`)
    }
  }
  // async function to used in update of the order_Production from store
  async UpDate_Ord_FromStore(
    Ord_Pro_store: ord_pro_store
  ): Promise<ord_pro_store> {
    try {
      // connect with the database
      const connectdatabase = await database.connect()
      // the vriables in database
      const columns = [
        Ord_Pro_store.orderstore, // the order from user
        Ord_Pro_store.productstore, // the production from store
      ]
      // create the result after connection
      const result = await connectdatabase.query(
        sql_database_store.UpDate_Ord_By_OrderId,
        columns
      )
      // exite from the connection
      connectdatabase.release()
      // return the result to optines the data
      return result.rows[0]
      // when promis is failed
    } catch (error) {
      // the error
      throw new Error(`${error}`)
    }
  }
  //async function to used in get all of the order_Production
  async GetAll_Ord_FromStore(): Promise<ord_pro_store[]> {
    try {
      // connect with the database
      const connectdatabase = await database.connect()
      // create the result after connection
      const result = await connectdatabase.query(
        sql_database_store.GetAll_Ord_Pro
      )
      // exite from the connection
      connectdatabase.release()
      // return the result to optines the data
      return result.rows
      // when promis is failed
    } catch (error) {
      // the error
      throw new Error(`${error}`)
    }
  }
  // async function to used in delet of the order_Production
  async Delet_One_Ord_FromStore(id_Ord_Pro: number): Promise<ord_pro_store> {
    try {
      // connect with the database
      const connectdatabase = await database.connect()
      // create the result after connection
      const result = await connectdatabase.query(
        sql_database_store.Delet_Ord_By_OrderId,
        [id_Ord_Pro]
      )
      // exite from the connection
      connectdatabase.release()
      // return the result to optines the data
      return result.rows[0]
      // when promis is failed
    } catch (error) {
      // the error
      throw new Error(`${error}`)
    }
  }
}

// export of the product_Order modle
export default Order_Product_Sara_Store
