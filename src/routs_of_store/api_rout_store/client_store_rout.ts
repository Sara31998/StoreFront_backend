// imports file
//improt express models to rout
import express from 'express'
//import middle ware to the authinticat
import clientAuth from '../../project_middle_ware/middleware_of_authanticate';
//import the controll order
import clientControll from '../../controll_of_database/client_table_controll';

// // create the router express
// const Client_Rout = Router()
// // create the router of order from the store

// Client_Rout.get('/ClientGetOne/:id', clientAuth, clientControll.ClientGetOne) // the get one client
//   .get('/ClientGetAll', clientAuth, clientControll.ClientGetAll) // the get all of client
//   //.get('/ClientGetOrderById', clientAuth, clientControll.ClientGetOrderById) // the get order by client id
//  // .get('/ClientGetProductById', clientAuth, clientControll.ClientGetProductById) // the get order by client id
//   .post('/ClientCreate', clientAuth, clientControll.ClientCreate) // the create client
//   .patch('ClientUpdate', clientAuth, clientControll.ClientUpdate) // update client
//   .delete('/ClientDelet', clientAuth, clientControll.ClientDelet) // delet the client
//   //.post('/ClientAuth', clientControll.ClientAuth) // the authanticate client
// // export the client Router
// export default Client_Rout


const userRouter = express.Router()
const controller = new clientControll()

userRouter.get('/', controller.getUsers)
userRouter.get('/:id', controller.getUserById)
userRouter.post('/create', controller.createUser)
userRouter.put('/:id', clientAuth, controller.updateUser)
userRouter.delete('/:id', clientAuth, controller.deleteUser)

export default userRouter

