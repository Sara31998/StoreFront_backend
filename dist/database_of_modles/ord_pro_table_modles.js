"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the sql of the database
const ord_of_pro_table_query_1 = __importDefault(require("../database_of_folder/database_quary/ord_of_pro_table_query"));
// import of the database
const index_database_1 = __importDefault(require("../database_of_folder/index_database"));
// the class of order from store
class Order_Product_Sara_Store {
    // create the Order_Production
    async Create_Ord_Pro_Store(Ord_Pro_store) {
        try {
            // connect with the database
            const connectdatabase = await index_database_1.default.connect();
            // the vriables in database
            const columns = [
                Ord_Pro_store.orderstore,
                Ord_Pro_store.productstore, // the product from store
            ];
            // create the result after connection
            const result = await connectdatabase.query(ord_of_pro_table_query_1.default.Insert_Ord_Pro, columns);
            // exite from the connection
            connectdatabase.release();
            // return the result to optines the data
            return result.rows[0];
            // when promis is failed
        }
        catch (error) {
            // the error
            throw new Error(`${error}`);
        }
    }
    // asunc function to get one Order_Production
    async GetOne_Ord_Pro_Store(id_Ord_Pro) {
        try {
            // connect with the database
            const connectdatabase = await index_database_1.default.connect();
            // create the result after connection
            const result = await connectdatabase.query(ord_of_pro_table_query_1.default.Get_Ord_By_OrderId, [id_Ord_Pro]);
            // exite from the connection
            connectdatabase.release();
            // return the result to optines the data
            return result.rows[0];
            // when promis is failed
        }
        catch (error) {
            // the error
            throw new Error(`${error}`);
        }
    }
    // async function to used in update of the order_Production from store
    async UpDate_Ord_FromStore(Ord_Pro_store) {
        try {
            // connect with the database
            const connectdatabase = await index_database_1.default.connect();
            // the vriables in database
            const columns = [
                Ord_Pro_store.orderstore,
                Ord_Pro_store.productstore, // the production from store
            ];
            // create the result after connection
            const result = await connectdatabase.query(ord_of_pro_table_query_1.default.UpDate_Ord_By_OrderId, columns);
            // exite from the connection
            connectdatabase.release();
            // return the result to optines the data
            return result.rows[0];
            // when promis is failed
        }
        catch (error) {
            // the error
            throw new Error(`${error}`);
        }
    }
    //async function to used in get all of the order_Production
    async GetAll_Ord_FromStore() {
        try {
            // connect with the database
            const connectdatabase = await index_database_1.default.connect();
            // create the result after connection
            const result = await connectdatabase.query(ord_of_pro_table_query_1.default.GetAll_Ord_Pro);
            // exite from the connection
            connectdatabase.release();
            // return the result to optines the data
            return result.rows;
            // when promis is failed
        }
        catch (error) {
            // the error
            throw new Error(`${error}`);
        }
    }
    // async function to used in delet of the order_Production
    async Delet_One_Ord_FromStore(id_Ord_Pro) {
        try {
            // connect with the database
            const connectdatabase = await index_database_1.default.connect();
            // create the result after connection
            const result = await connectdatabase.query(ord_of_pro_table_query_1.default.Delet_Ord_By_OrderId, [id_Ord_Pro]);
            // exite from the connection
            connectdatabase.release();
            // return the result to optines the data
            return result.rows[0];
            // when promis is failed
        }
        catch (error) {
            // the error
            throw new Error(`${error}`);
        }
    }
}
// export of the product_Order modle
exports.default = Order_Product_Sara_Store;
