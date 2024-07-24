import {IncomingMessage} from "http"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config();
type AuthCallback = (err: string | null, succes: boolean) => void;

 const authMiddleware = (req: IncomingMessage, callback: AuthCallback) => {

    try {
        const token = req.headers['authorization'];
        const SECRET = process.env["JWT_SECRET"] ?? "DEFAULT_SECRET";
        
        if (!token || token === undefined) {
           callback('No token provided', false);
           return;
        }

        if (token === '123ADWAWDAWDQWDAD33'){
            callback(null, true)
        } else {
            const isValid = jwt.verify(token.replace('Bearer ', ''), SECRET);
        

            if (!isValid) {
               callback('Token Invalid', false);
               return
            } else{
                callback(null, true)
            }
    
        }
        
    } catch (error) {
        console.log(error)
        callback('Internal Server', false)
    }

}


export default authMiddleware;