import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express()

app.use(express())
app.use(cors())

// - **Exercício 1**
    
//     Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// a. Qual método HTTP você deve utilizar para isso?
// R: O método GET

// b. Como você indicaria a entidade que está sendo manipulada?
// R: Através do path. ex: app.get("/users", (req: Request, res: Response)=>{})

// - **Exercício 2**
    
//     Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica, recebendo apenas um `type` por vez. Após isso, responda:
    
//     *a.* Como você passou os parâmetros de type para a requisição? Por quê?

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

// app.get("/users", (req: Request, res: Response) => {
//     const type: string = req.query.type as string
//     const user: user | undefined = users.find((user) => user.type === type)
//     res.status(200).send({user})
// })
    
//     b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// R:



// - **Exercício 3**
    
//     Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando ****por **nome**.
    
//     *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
// R: questionar no plantão
 
    
//     b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app. get("/users", (req: Request, res: Response) => {
    let errorCode = 404
    try{
        const name: string = req.query.name as string

        const user: user | undefined = users.find((user) => user.name === name)

        if(!user){
            throw new Error("Usuário não encontrado.")
        }
        res.status(200).send(user)
    } catch(error: any){
        res.status(errorCode).send(error.message)
    }
})

// - **Exercício 4**
    
//     Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.

app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const { id, name, email, type, age }: user = req.body
        
        res.status(200).send("OK")
    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
})
    
//     a. Mude o método do endpoint para `PUT`. O que mudou?

app.put("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const { id, name, email, type, age }: user = req.body
        
        res.status(200).send("OK")
    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
})







const server = app.listen(process.env.PORT || 3003, () =>{
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
})