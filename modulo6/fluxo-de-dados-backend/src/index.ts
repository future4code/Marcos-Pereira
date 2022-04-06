import express from "express"
import cors from "cors"
import { Product, products } from "./data"
import { v4 as GenerateId } from 'uuid'

const app = express()

app.use(cors())
app.use(express.json())

// - Exercício 1
    
//     Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método `**GET`** no path **`“/test”`** que retorna uma mensagem genérica avisando que a API está funcional.

app.get("/test", (req, res) => {
    res.send("Funcionou!")
})

// - Exercício 2
    
//     Crie um arquivo chamado **`data.js`** que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). Popule manualmente o array com pelo menos 3 produtos.

// - Exercício 3
    
//     Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

// app.post("/new-product", (req, res) => {
//     const productName = req.body.name
//     const productPrice = req.body.price

//     const newProduct: Product = {
//         id: GenerateId(),
//         name: productName,
//         price: productPrice
//     }

//     products.push(newProduct)
//     res.send("Produto criado!")
// })

// - Exercício 4
    
//     Crie um endpoint que **retorna todos os produtos**.

app.get("/products", (req, res) => {
    const allProducts = []

        for (let product of products){
            allProducts.push(product)
        }
    res.send(allProducts)
})

// - Exercício 5
    
//     Crie um endpoint que **edita** **o preço de** **um determinado produto** e retorna a lista de produtos atualizada.

// app.put
// continuar depois

// - Exercício 6
    
//     Construa um endpoint que **deleta um determinado produto** e retorna a lista de produtos atualizada.

app.delete("/products/:id", (req, res) => {
    const id = req.params.id

    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
           products.splice(i, 1)
        }
    }
    res.send(products)
})

// - Exercício 7
    
//     Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados fluxos de validação dos dados recebidos (`name` e `price`)
    
//     - erro caso um ou nenhum deles forem recebidos
//     - erro caso `name` seja diferente de `string`
//     - erro caso `price` seja diferente de `number`
//     - erro caso `price` seja igual ou menor que `0`
//     - erro caso algo inesperado aconteça

const Errors: { [chave: string]: {status: number, mensagem: string} } = {
    MISSING_PARAMETERS: {status: 422, mensagem: "Campo obrigatório inválido. Consulte a documentação."}
}

app.post("/new-product", (req, res) => {
    try{
        const productName: string = req.body.name
        const productPrice: number = req.body.price
        const newProduct: Product = {
            id: GenerateId(),
            name: productName,
            price: productPrice
        }
        products.push(newProduct)

        if(!productName){
            throw new Error(Errors.MISSING_PARAMETERS.mensagem)
        }

        if(!productPrice){
            throw new Error(Errors.MISSING_PARAMETERS.mensagem)
        }
        
    } catch(error:any){
        switch(error.mensagem) {
            case Errors.MISSING_PARAMETERS.mensagem:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.mensagem)
                break
            case Errors.MISSING_PARAMETERS.mensagem:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.mensagem)
                break
        }
    }
    res.status(201).send("Produto criado!")
})

// - Exercício 8
    
//     Refatore o endpoint do exercício 5 (editar produto) para que sejam implementados fluxos de validação dos dados recebidos (`price`)
    
//     - erro caso `price` não seja recebido
//     - erro caso `price` seja diferente de `number`
//     - erro caso `price` seja igual ou menor que `0`
//     - erro caso o produto a ser editado não seja encontrado
//     - erro caso algo inesperado aconteça








app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.post("/", (req, response) => {

})