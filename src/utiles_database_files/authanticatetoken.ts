// import the jwt to the tokent 
import jwt from 'jsonwebtoken'
// import config to the used  vriables 
import configfiles from '../config-dotenv'
// create the vriables of the tokensecret
const tokenSecretpass: string = configfiles.TOKEN_SECRET_USER as string
// export of the token to usd in files 
export const createToken = (iduser: number, user_name: string): string => {
    return jwt.sign({ iduser, user_name }, tokenSecretpass)
}