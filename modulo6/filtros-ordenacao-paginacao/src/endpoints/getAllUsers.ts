import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectAllUsers from "../data/migrations"

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const users = await selectAllUsers()
//        let name = req.query.name
 
//        if(!name){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }

//        const result = await connection("aula48_exercicio")
//        .where("title", "like", `%${name}%`)

//        res.status(200).send(users)
       
//     } catch (error: any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }


//  export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const users = await selectAllUsers()

//        let name = req.query.name
//        let sort = req.query.sort as string
//        let order = req.query.order as string
 
//        if(!name){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }

//        const result = await connection("aula48_exercicio")
//        .where("title", "like", `%${name}%`)
//        .orderBy(sort, order)    
 
//        res.status(200).send(users)
       
//     } catch (error: any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()

       let page = Number(req.query.page)
       let size = 5
       let offset = size*(page-1)

       const result = await connection("aula48_exercicio")
       .limit(size)
       .offset(offset)    
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }