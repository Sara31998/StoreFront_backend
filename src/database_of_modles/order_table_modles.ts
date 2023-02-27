// // import the sql of the database
// import sql_database_store from '../database_of_folder/database_quary/order_table_query';
// // import of the database
// import database from '../database_of_folder/index_database';
// // import of the order types
// import orderfromstore from '../types_of_database/order_from_store'
// // the class of order from store
// class Order_From_Sara_Store {
//   // create the Order
//   async Create_Ord_FromStore(
//     Ord_in_store: orderfromstore
//   ): Promise<orderfromstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // the vriables in database
//       const columns = [
//         Ord_in_store.id_user, // the id of the usr owner order
//         Ord_in_store.status_order, // the stsuts of user owner of order
//         Ord_in_store.quantity_order, // the quantity of user owner of order
//       ]
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.Create_Order,
//         columns
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // asunc function to get one Order
//   async GetOne_Ord_FromStore(id_Ord: number): Promise<orderfromstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.GetOne_Order,
//         [id_Ord]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used in update of the order from store
//   async UpDate_Ord_FromStore(
//     Ord_in_store: orderfromstore
//   ): Promise<orderfromstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // the vriables in database
//       const columns = [
//         Ord_in_store.id, // the id of the order
//         Ord_in_store.status_order, // the stsuts of user owner of order
//         Ord_in_store.quantity_order, // the quantity of user owner of order
//       ]
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.UpDateOne_Order,
//         columns
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   //async function to used in get all of the order
//   async GetAll_Ord_FromStore(): Promise<orderfromstore[]> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.GetAll_Order
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
//   // async function to used in delet of the order
//   async Delet_One_Ord_FromStore(id_Ord: number): Promise<orderfromstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.DeletOne_Order,
//         [id_Ord]
//       )
//       // exite from the connection
//       connectdatabase.release()
//       // return the result to optines the data
//       return result.rows[0]
//       // when promis is failed
//     } catch (error) {
//       // the error
//       throw new Error(`${error}`)
//     }
//   }
// }

// // export of the product modle
// export default Order_From_Sara_Store

// @ts-ignore
// import of database from folder 
import database from '../database_of_folder/index_database';
// import of the order types to used
import order_store from '../types_of_database/order_from_store';
// import of the order modles to test 
import ord_pro_store from '../types_of_database/order_product_store';
// the orderStore
export class OrderStore {
    // get all the order 
    async getOrders(): Promise<order_store[]> {
        try {
            // @ts-ignore
            // connect with database 
            const connection = await database.connect()
            // the sql of the get all orders from stors
            const sqlgetall = 'SELECT * FROM orderfromstore'
              // the result of connect the sql with database
            const result = await connection.query(sqlgetall)
            // Exite from the database
            connection.release()
              // return the rows have the data
            return result.rows
            // rejected promise 
        } catch (err) {
            // the massage error in rejected
            throw new Error(`Could not get orders. Error: ${err}`)
        }
    }
// the get order by id of the order
    async getOrderById(idord: number): Promise<order_store> {
        try {
            // the sql of the get one orders from stors
            const sqlgetone = 'SELECT * FROM orderfromstore WHERE id=($1)'
            // @ts-ignore
            // connect with database 
            const connection = await database.connect()
                // the result of connect the sql with database
            const result = await connection.query(sqlgetone, [idord])
             // Exite from the database
            connection.release()
              // return the rows have the data
            return result.rows[0]
            // rejected promise 
        } catch (err) {
            // the massage error in rejected
            throw new Error(`Could not find product ${idord}. Error: ${err}`)
        }
    }
// create order from store
    async createOrder(ord: order_store): Promise<order_store> {
        try {
            // the sql of the create orders from stors
            const sqlcreate =
                'INSERT INTO orderfromstore (id_user, status_order, quantity_order) VALUES($1, $2, $3) RETURNING *'
            // @ts-ignore
            // connect with database 
            const connection = await database.connect()
            // the result of connect the sql with database
            const result = await connection.query(sqlcreate, [ord.id_user, ord.status_order, ord.quantity_order])
             // Exite from the database
            connection.release()
             // return the rows have the data
            return result.rows[0]
            // rejected promise 
        } catch (err) {
            // the massage error in rejected
            throw new Error(`Could not add new order. Error: ${err}`)
        }
    }
// update the order in store
    async updateOrder(ord: order_store): Promise<order_store> {
        try {
            // the sql of the update orders from stors
            const sqlupdate = `UPDATE orderfromstore SET id_user = $2, status_order = $3, quantity_order =$4 WHERE id = $1 RETURNING *`
            // @ts-ignore
            // connect with database 
            const connection = await database.connect()
             // the result of connect the sql with database
            const result = await connection.query(sqlupdate, [
                ord.id,  // the id of the order
                ord.id_user,  // the id of client owner of the order
                ord.status_order, // the statuse of the ordr
            ])
             // Exite from the database
            connection.release()
                  // return the rows have the data
            return result.rows[0]
            // rejected promise 
        } catch (err) {
            // the massage error in rejected
            throw new Error(`Could not update order ${ord.id}. Error: ${err}`)
        }
    }
// delet the order from store
    async deleteOrder(idord: number): Promise<order_store> {
        try {
            // @ts-ignore
            // connect with database 
            const conn = await database.connect()
            // the sql of the delet orders from stors
            const sqldelet = 'DELETE FROM productstore WHERE id=($1)'
            // the result of connect the sql with database
            const result = await conn.query(sqldelet, [idord])
             // Exite from the database
            conn.release()
              // return the rows have the data
            return result.rows[0]
            // rejected promise 
        } catch (err) {
            // the massage error in rejected
            throw new Error(`Could not delete order ${idord}. Error: ${err}`)
        }
    }
// get the current order from store
    async getCurrentOrders(idord: number) {
        try {
            // @ts-ignore
            // connect with database 
            const conn = await database.connect()
            // the sql of the get currunt orders from stors
            const sqlgetcurrent = `SELECT *
                         FROM orderfromstore
                         WHERE id_user = ($1);`
            // the result of connect the sql with database
            const result = await conn.query(sqlgetcurrent, [idord])
             // Exite from the database
            conn.release()
             // return the rows have the data
            return result.rows
            // rejected promise 
        } catch (err) {
            throw new Error(
                // the massage error in rejected
                `Could not get orders for user ${idord}. Error: ${err}`
            )
        }
    }
// add product to order in store
    async addProductToOrder(pro_ord: ord_pro_store): Promise<ord_pro_store> {
        try {
            // the sql of the get product to  orders from stors
            const sqladdpro =
                'INSERT INTO oderofproduct (orderstore, productstore) VALUES($1, $2) RETURNING *'
            // @ts-ignore
            // connect with database 
            const connection = await database.connect()
             // the result of connect the sql with database
            const result = await connection.query(sqladdpro, [
                pro_ord.orderstore,
                pro_ord.productstore,
            ])
             // Exite from the database
            connection.release()
             // return the rows have the data
            return result.rows[0]
            // rejected promise 
        } catch (err) {
            // the massage error in rejected
            throw new Error(`Could not add product. Error: ${err}`)
        }
    }
};
// export of the order store
export default OrderStore;
