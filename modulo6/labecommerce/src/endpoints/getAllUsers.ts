import { Request, Response} from "express"
import connection from "../data/connection"

export default async function getAllUsers(
    req: Request,
    res: Response
):Promise<void>
 {
    try{
        const users = await connection("labecommerce_users")
    res.status(200).send(users)
    }catch(error: any){
        res.status(500).send(error.message)
    }
}