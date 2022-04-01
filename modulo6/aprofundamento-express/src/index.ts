import express, { Request, Response} from 'express';
import cors from 'cors';
import { v4 as gerarId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

// - Exercício 1
    
// Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

// - Exercício 2
    
//     Acesse a API do JSONPlaceholder e observe os endpoints que buscam [afazeres](https://jsonplaceholder.typicode.com/todos) (”*to dos”*). Crie uma variável de tipo para representar cada afazer.

type Tarefa = {
    userID: string,
    id: string,
    title: string,
    completed: boolean
}

// - Exercício 3
    
//     Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.

const tarefas: Tarefa[] = [
    {
        userID: "Usuário-1",
        id: "1",
        title: "Lavar a louça",
        completed: true
    },
    {
        userID: "Usuário-1",
        id: "2",
        title: "Apirar o chão",
        completed: false
    },
    {
        userID: "Usuário-2",
        id: "3",
        title: "Fazer compras",
        completed: false
    },
    {
        userID: "Usuário-2",
        id: "4",
        title: "Passar roupas",
        completed: true
    },
    {
        userID: "Usuário-3",
        id: "5",
        title: "Lavar o carro",
        completed: true
    },
    {
        userID: "Usuário-3",
        id: "6",
        title: "Passear com o cachorro",
        completed: true
    },
    {
        userID: "Usuário-4",
        id: "7",
        title: "Varrer a casa",
        completed: false
    },
    {
        userID: "Usuário-4",
        id: "8",
        title: "Lavar as roupas",
        completed: false
    },
    {
        userID: "Usuário-5",
        id: "9",
        title: "Organizar o guarda-roupa",
        completed: true
    },
    {
        userID: "Usuário-5",
        id: "10",
        title: "Estudar para a prova",
        completed: false
    }
]

// - Exercício 4
    
//     Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

// app.get("/tarefas", (req: Request, res: Response) => {
//     const verificarTarefas = req.query.completed
//     const tarefasListadas = tarefas.find(tarefas => tarefas.completed === verificarTarefas)
//     res.send(tarefasListadas)
// })
// falta finalizar essa

// - Exercício 5
    
//     Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

app.post("/nova-tarefa", (req: Request, res: Response) => {
    const userId = req.headers.authorization
    const usuario = tarefas.find(user => user.id === userId)

    const nomeTarefa = req.body.title
    const novaTarefa = {
        userId: userId,
        id: gerarId(),
        title: nomeTarefa,
        completed: false
    }
    res.send("OK")
    console.log(novaTarefa)
})

// - Exercício 6
    
//     Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.


// - Exercício 7
    
//     Construa um endpoint que deleta um determinado afazer de acordo com sua id.

app.delete("/excluir", (req: Request, res: Response) => {
    const userID = req.query.id

    tarefas.forEach((tarefa) => {
        
    })
})








app.listen(3003, () => {
    console.log("Servidor rodando...")
})