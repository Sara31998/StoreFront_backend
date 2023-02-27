// // import files to used

// import the Order type to test this
import Order_Type from '../../types_of_database/order_from_store';
// import database from database
import database from '../../database_of_folder/index_database';
// import of user types to used
import User_Type from '../../types_of_database/user_store_types';
// import of user models to used
import User_Mod from '../user_table_moddles';
// import product models
import Order_Store_Mod from '../order_table_modles';
import Poduct_Type from '../../types_of_database/product_store_types';

// the vriables to used in test of user models
const user_store_models = new User_Mod()
// the vriables to used in test of order models
const oroduct_store_models = new Order_Store_Mod()

// the test of endpoint of the order
describe('test the endpoint of the Order Models', () => {
  //test the order models if exite
  describe('test the order method to exite', () => {
    // test the create method of order to exite
    it('test to create  method to exite', () => {
      // check the order models create ethod to be defined
      expect(oroduct_store_models.createOrder).toBeDefined()
    })
    // test the get one method of order to exite
    it('test to get one  method to exite', () => {
      // check the order models get one ethod to be defined
      expect(oroduct_store_models.getOrderById).toBeDefined()
    })
    // test the Update method of order to exite
    it('test to Update  method to exite', () => {
      // check the order models update ethod to be defined
      expect(oroduct_store_models.updateOrder).toBeDefined()
    })
    // test the Get all method of order to exite
    it('test to Get all   method to exite', () => {
      // check the order models get all  ethod to be defined
      expect(oroduct_store_models.getOrders).toBeDefined()
    })
    // test the Delet one method of order to exite
    it('test to Delet one  method to exite', () => {
      // check the order models delet one ethod to be defined
      expect(oroduct_store_models.deleteOrder).toBeDefined()
    })
  })
  //test the order modle
  describe('test of the order medole ', () => {
    // create vriables order test
    const order_test = {
      quantity_order: 2, // the quantity of the order
      status_order: 'Not Comblited', // the statues of user
    } as Order_Type
    // create the vriables user owner order
    const user_owner_ord = {
      user_name: 'sara4067', // user name
      first_name: 'Sara', // first name
      last_name: 'Gamal', // last name
      your_email: 'sg837121@gmail.com', // the email
      your_password: '123456', // the password
    } as User_Type
    const productstore1 = {
      name_producr: 'Jeanse', // the name of product
        descount_product: 10, // the descount
         brand_product: 'joda', // the product brand
        price_product: 100, // the price of production
        category_product: 'clouth', // the product category
    } as Poduct_Type // all this prapter equal to the type of product
    // used befor all in test
    beforeAll(async () => {
      // create new client owner
      const New_Client = await user_store_models.createUser(user_owner_ord)
      // the id to tha same in two
      user_owner_ord.id = New_Client.id as number
      // the order is the same id \
      order_test.id_user = user_owner_ord.id as number
      // create the new order
      const new_oder = await oroduct_store_models.createOrder(
        order_test
      )
      // the id in two orde is the same
      order_test.id = new_oder.id
    })
    afterAll(async () => {
      // connect to database
      const connection = await database.connect()
      // to write the sql of user
      const sql_data_client = 'DELETE FROM usersestore'
      // to write the sql of order
      const sql_data_ord = 'DELETE FROM orderfromstore'
      // CONNECT THE SQL TO DATA BASE
      await connection.query(sql_data_ord)
      await connection.query(sql_data_client)
      //  exite the sql from data base
      connection.release()
    })
    // test of the create order
    it('test of the method of create the order if order not exite', async () => {
      // create the new order
      const neworder = {
        quantity_order: 4, // the quantity of the order
        status_order: 'comblited', // the statues of user
        id_user: user_owner_ord.id, // the id of the user
      } as Order_Type

      // create new order
      const newordertocreate = await oroduct_store_models.createOrder(
        neworder
      )
      // check of the id of user
      expect(newordertocreate.id_user).toBe(neworder.id_user)
      // check of the quantity user
      expect(newordertocreate.quantity_order).toBe(neworder.quantity_order)
      // check of the statuse of order
      expect(newordertocreate.status_order).toBe(neworder.status_order)
    })
    // test of get all of order models
    it('test of get all method on order moder ', async () => {
      // cthe vriable of order to get all method
      const orderGetAll = await oroduct_store_models.getOrders()
      expect(orderGetAll.length).toBe(2);
    })
    // test the get one of the order method
    it('thest method of get one on order models', async () => {
      // the vriables of the get one order method
      const ordergetone = await oroduct_store_models.getOrderById(
        order_test.id as number
      )
      // the check of the id of the order
      expect(ordergetone.id).toBe(order_test.id)
      // the check of the id of user  of the order
      expect(ordergetone.id_user).toBe(order_test.id_user)
      // the check of the quantity of the order
      expect(ordergetone.quantity_order).toBe(order_test.quantity_order)
      // the check of the statuse of the order
      expect(ordergetone.status_order).toBe(order_test.status_order)
    })
    // // test the delet method of order
    // it('test the delet one method from order', async () => {
    //   // create the vriable of the delet order
    //   const deletorder = await oroduct_store_models.deleteOrder(
    //     order_test.id_user 
    //   )
    //   // the check of the id of the order
    //   expect(deletorder.id).toBe(order_test.id)
    //   // the check of the id of user  of the order
    //   expect(deletorder.id_user).toBe(order_test.id_user)
    //   // the check of the quantity of the order
    //   expect(deletorder.quantity_order).toBe(order_test.quantity_order)
    //   // the check of the statuse of the order
    //   expect(deletorder.status_order).toBe(order_test.status_order)
    // })
    it('test the delet one method from order', async () => {
      // the vriables of the get one order method
      const ordergetone = await oroduct_store_models.getOrderById(
        order_test.id as number
      )
      // the check of the id of the order
      expect(ordergetone.id).toBe(order_test.id)
      // the check of the id of user  of the order
      expect(ordergetone.id_user).toBe(order_test.id_user)
      // the check of the quantity of the order
      expect(ordergetone.quantity_order).toBe(order_test.quantity_order)
      // the check of the statuse of the order
      expect(ordergetone.status_order).toBe(order_test.status_order)
    })
  })
})

// import { OrderStore } from '../order_table_modles'
// import product_mod from '../product_table_modlles';
// import { UserStore } from '../user_table_moddles'

// const store = new OrderStore()
// const productStore = new product_mod()
// const userStore = new UserStore()
// let productId: number, userId: number

// describe('Order Model', () => {
//     beforeAll(async () => {
//         const product = await productStore.Create_ProductStore({
//           id: 1,
//           name_producr: 'Jeanse', // the name of product
//           descount_product: 10, // the descount
//            brand_product: 'joda', // the product brand
//           price_product: 100, // the price of production
//           category_product: 'clouth', // the product category
//         })
//         productId = product.id as number
//         const user = await userStore.createUser({
//             user_name: 'ssmith',
//             first_name: 'Sallie',
//             last_name: 'Test',
//             your_email: 'sara@gmail.com',
//             your_password: 'password123',
//         })
//         userId = user.id as number
//     })

//     afterAll(async () => {
//         await productStore.Delet_One_ProductStore(productId)
//         await userStore.deleteUser(userId)
//     })

//     it('should create an order', async () => {
//         const result = await store.createOrder({
//             quantity_order: 10,
//             id_user: userId,
//             status_order: 'new',
//         })
//         expect(result).toEqual({
//             id: 1,
//             quantity_order: 10,
//             id_user: userId,
//             status_order: 'new',
//         })
//     })

//     it('should return a list of orders', async () => {
//         const result = await store.getOrders()
//         expect(result).toEqual([
//             {
//                 id: 1,
//                 quantity_order: 10,
//                 id_user: userId,
//                 status_order: 'new',
//             },
//         ])
//     })

//     it('should return the correct order', async () => {
//         const result = await store.getOrderById(1)
//         expect(result).toEqual({
//             id: 1,
            
//             quantity_order: 10,
//             id_user: userId,
//             status_order: 'new',
//         })
//     })

//     it('should update order status', async () => {
//         const result = await store.updateOrder({
//             id: 1,
          
//             quantity_order: 10,
//             id_user: userId,
//             status_order: 'complete',
//         })
//         expect(result).toEqual({
//             id: 1,
            
//             quantity_order: 10,
//             id_user: userId,
//             status_order: 'complete',
//         })
//     })

//     it('should delete the order', async () => {
//         await store.deleteOrder(1)
//         const result = await store.getOrders()
//         expect(result).toEqual([])
//     })
// })
