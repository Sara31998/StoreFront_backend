// // import the sql of the database
// import sql_database_store from '../database_of_folder/database_quary/product_table_queru';
// // import of the database
// import database from '../database_of_folder/index_database';
// // import of the production types
// import productOfstore from '../types_of_database/product_store_types'
// // the class of roduct in store
// class Production_In_Sara_Store {
//   // create the production
//   async Create_ProductStore(
//     Pro_in_store: productOfstore
//   ): Promise<productOfstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // the vriables in database
//       const columns = [
//         Pro_in_store.name_producr, // the  name of the product
//         Pro_in_store.descount_product, // the descount of the product
//         Pro_in_store.brand_product, // the name of brand of product
//         Pro_in_store.price_product, //the price of the product
//         Pro_in_store.category_product, // the category of the product
//       ]
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.Create_Product as string,
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
//   // asunc function to get one product
//   async GetOne_ProductStore(id_Pro: number): Promise<productOfstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.GetOne_Product as string,
//         [id_Pro]
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
//   // async function to used in update of the product in store
//   async UpDate_ProductStore(
//     Pro_in_store: productOfstore
//   ): Promise<productOfstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // the vriables in database
//       const columns = [
//         Pro_in_store.name_producr, // the  name of the product
//         Pro_in_store.descount_product, // the descount of the product
//         Pro_in_store.brand_product, // the name of brand of product
//         Pro_in_store.price_product, //the price of the product
//         Pro_in_store.category_product, // the category of the product
//         Pro_in_store.id, //The id of the product
//       ]
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.UpDateOne_Product as string,
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
//   //async function to used in get all of the production
//   async GetAll_ProductStore(): Promise<productOfstore[]> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.GetAll_Product as string
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
//   // async function to used in delet of the production
//   async Delet_One_ProductStore(id_Pro: number): Promise<productOfstore> {
//     try {
//       // connect with the database
//       const connectdatabase = await database.connect()
//       // create the result after connection
//       const result = await connectdatabase.query(
//         sql_database_store.DeletOne_Product as string,
//         [id_Pro]
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
// export default Production_In_Sara_Store

// import of the database from foldr to connect
import database from '../database_of_folder/index_database'
// import of the order types 
import Product_type from '../types_of_database/product_store_types'
// the class of product in Store
export class ProductStore {
    // the get all product 
    async getProducts(): Promise<Product_type[]> {
        try {
            // @ts-ignore
            // connect with the database to open
            const connection = await database.connect()
            // the sql to write in the database
            const sqlgetall = 'SELECT * FROM productstore'
            // the result of the connect the database with the sql
            const result = await connection.query(sqlgetall)
            // exite from the database
            connection.release()
            //return of the rows has the data
            return result.rows
            // the reject of the promise
        } catch (err) {
             // the massege of the rror
            throw new Error(`Could not get products. Error: ${err}`)
        }
    }
// the get one product by id of the product
    async getProductById(id_Pro: number): Promise<Product_type> {
        try {
            // the sql to write in the database
            const sqlgetone = 'SELECT * FROM productstore WHERE id=($1)'
            // @ts-ignore
            // connect with the database to open
            const connection = await database.connect()
            // the result of the connect the database with the sql
            const result = await connection.query(sqlgetone, [id_Pro])
            // exite from the database
            connection.release()
            //return of the rows has the data
            return result.rows[0]
            // the reject of the promise
        } catch (err) {
             // the massege of the rror
            throw new Error(`Could not find product ${id_Pro}. Error: ${err}`)
        }
    }
// the create of the product in store
    async createProduct(pro: Product_type): Promise<Product_type> {
        try {
            // the sql to write in the database
            const sqlcreate =
                'INSERT INTO productstore (name_producr, descount_product,brand_product , price_product, category_product) VALUES($1, $2, $3, $4, $5) RETURNING *'
            // @ts-ignore
            // connect with the database to open
            const connection = await database.connect()
             // the result of the connect the database with the sql
            const result = await connection.query(sqlcreate, [
                pro.name_producr,
                pro.descount_product,
                pro.brand_product,
                pro.price_product,
                pro.category_product,
                
            ])
            // exite from the database
            connection.release()
            //return of the rows has the data
            return result.rows[0]
            // the reject of the promise
        } catch (err) {
            throw new Error(
                 // the massege of the rror
                `Could not add new product ${pro.name_producr}. Error: ${err}`
            )
        }
    }
// the update of the product
    async updateProduct(pro: Product_type): Promise<Product_type> {
        try {
            // the sql to write in the database
            const sqlupdate = `UPDATE productstore SET name_producr = $2,descount_product = $3,brand_product = $4, price_product = $5, category_product = $6 WHERE id = $1 RETURNING *`
            // @ts-ignore
            // connect with the database to open
            const connection = await database.connect()
             // the result of the connect the database with the sql
            const result = await connection.query(sqlupdate, [
                pro.id,
                pro.name_producr,
                pro.descount_product,
                pro.brand_product,
                pro.price_product,
                pro.category_product,
            ])
             // exite from the database
            connection.release()
            //return of the rows has the data            
            return result.rows[0]
            // the reject of the promise
        } catch (err) {
             // the massege of the rror
            throw new Error(`Could not update product ${pro.id}. Error: ${err}`)
        }
    }
// the delet of the product from store
    async deleteProduct(id_Pro: number): Promise<Product_type> {
        try {
            // the sql to write in the database
            const sqldelet = 'DELETE FROM productstore WHERE id=($1)'
            // @ts-ignore
            // connect with the database to open
            const conn = await database.connect()
             // the result of the connect the database with the sql
            const result = await conn.query(sqldelet, [id_Pro])
            // exite from the database
            conn.release()
            //return of the rows has the data
            return result.rows[0]
            // the reject of the promise
        } catch (err) {
            // the massege of the rror
            throw new Error(`Could not delete product ${id_Pro}. Error: ${err}`)
        }
    }
};
// export of the product Store
export default ProductStore;

