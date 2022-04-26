import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { v4 as generateId } from "uuid"


const app = express();
app.use(express.json());
app.use(cors());


app.post("/user", async(req: Request, res: Response): Promise<void> => {
    try{
        const id = generateId()
        await connection("User").insert({
            id,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })
        res.status(201).send("Usuário criado!")
    } catch (error: any){
        res.status(500).send("Erro")
    }
})


app.get("/user/:id", async(req: Request, res: Response): Promise<void> =>{
    try{
        await connection("User")
        .where({
            id: req.params.id
        })
        res.status(200)
    } catch(error: any){
        res.status(500).send("Erro")
    }
})





const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});