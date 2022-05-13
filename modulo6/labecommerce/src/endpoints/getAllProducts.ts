import { Request, Response} from "express"
import connection from "../data/connection"

export default async function getAllProducts(
    req: Request,
    res: Response
):Promise<void>
 {
    try{
        const products = await connection("labecommerce_products")
    res.status(200).send(products)
    }catch(error: any){
        res.status(500).send(error.message)
    }
}