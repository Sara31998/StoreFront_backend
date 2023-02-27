// import of the express
import { Response, Request, NextFunction } from 'express'
// the production order models
import Pro_Ord_Mod from '../database_of_modles/ord_pro_table_modles';
// the vriables of the production order models
const Ord_Pro_Model = new Pro_Ord_Mod()
// export of Get One
export const GetOnePro_Ord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if the promise is true
  try {
    // the vriable of the product order
    const Pro_Ord_Store = await Ord_Pro_Model.GetOne_Ord_Pro_Store(
      // the request is return of the id
      req.params.id as unknown as number
    )
    res.status(200).json({
      // the status
      statusoford: 'Succes',
      data: Pro_Ord_Store,
      massege: 'Get One',
    })
    // if the promis is the fialed
  } catch (error) {
    // the error of the fialed
    next(error)
  }
}
// export of the Get All of production order
export const GetAllPro_Ord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if the promise is true
  try {
    // the vriable of the product order
    const Pro_Ord_All_Store = await Ord_Pro_Model.GetAll_Ord_FromStore()
    res.status(200).json({
      // the status
      statusoford: 'Succes',
      // the data
      data: Pro_Ord_All_Store,
      //the massege
      massege: 'Get All Product Order',
    })
    // if the promis is the fialed
  } catch (error) {
    // the error of the fialed
    next(error)
  }
}
// export of the Create  of production order
export const CreatePro_Ord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if the promise is true
  try {
    // the vriable of the product order
    const Pro_Ord_Creat_Store = await Ord_Pro_Model.Create_Ord_Pro_Store(
      req.body
    )
    res.status(200).json({
      // the status
      statusoford: 'Succes',
      // the data
      data: Pro_Ord_Creat_Store,
      //the massege
      massege: 'Create one  Product Order',
    })
    // if the promis is the fialed
  } catch (error) {
    // the error of the fialed
    next(error)
  }
}
// export of the UpDate of production order
export const UpDatePro_Ord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if the promise is true
  try {
    // the vriable of the product order
    const Pro_Ord_UpDate_Store = await Ord_Pro_Model.UpDate_Ord_FromStore(
      req.body
    )
    res.status(200).json({
      // the status
      statusoford: 'Succes',
      // the data
      data: Pro_Ord_UpDate_Store,
      //the massege
      massege: 'Get All Product Order',
    })
    // if the promis is the fialed
  } catch (error) {
    // the error of the fialed
    next(error)
  }
}
// export of the Delet One  of production order
export const DeletPro_Ord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if the promise is true
  try {
    // the vriable of the product order
    const Pro_Ord_Delet_Store = await Ord_Pro_Model.Delet_One_Ord_FromStore(
      req.body.id
    )
    res.status(200).json({
      // the status
      statusoford: 'Succes',
      // the data
      data: Pro_Ord_Delet_Store,
      //the massege
      massege: 'Delet Product Order',
    })
    // if the promis is the fialed
  } catch (error) {
    // the error of the fialed
    next(error)
  }
}


