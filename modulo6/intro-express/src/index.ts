import express, { Request, Response } from "express"
import cors from "cors"
import { jogadoresNaUCL } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//Exercício 1

// Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.

app.get("/", (req: Request, res: Response) => {
    console.log("Deu certo")

    res.status(201).send("Funcionou")
})

// - Exercício 2
    
//     Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:

// - id
// - name
// - phone
// - email
// - website

app.get("/:id", (req: Request, res: Response) =>{
    const id = req.params.id
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email
    const website = req.body.website

    console.log(id, name, phone, email, website)

    res.status(201).send("Deu certo")
})

// - Exercício 3
    
//     Crie um array de usuários para servir como base de dados da nossa API.

//R: Está no arquivo data.ts

// - Exercício 4
    
//     Construa um endpoint que retorne os usuários criados no exercício anterior.
    
//     Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

app.get("/jogadores", (req: Request, res: Response) => {
    const jogadores = jogadoresNaUCL.map((jogador => jogador.info)).flat(1)

    res.send(jogadores)
})

// - Exercício 5
    
//     Acesse a API do JSONPlaceholder e observe os endpoints que buscam **posts**. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:
    
//     - id
//     - title
//     - body
//     - userId

app.get("/posts", (req: Request, res: Response) =>{
        const id = req.params.id
        const title = req.body.title
        const userId = req.body.userId
        const body = req.body.body
    
        console.log(id, title, userId, body)
    
        res.status(201).send("Deu certo")
    })

// - Exercício 6
    
// Crie um array de posts para incrementar a base de dados da nossa API. 
    
//  Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.

// R: Fiz dentro do array de usuários, acho que fica melhor organizado

// - Exercício 7
    
//     Construa um endpoint que retorne os posts criados no exercício anterior.

app.get("/posts", (req: Request, res: Response) => {
    const idJogador = req.query.id

    const jogadores = jogadoresNaUCL.map((jogador) => jogador.info)
    let posts 
    jogadores.forEach(jogador => {
        if(jogador.id === idJogador) {
            posts = jogador.posts
        }
    })
    res.send(posts)
})




app.listen(3003, () => {
    console.log("Servidor rodando...")
})