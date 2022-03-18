//Exercício 1

// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// R: através do process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[2]
const idade = process.argv[3]

// console.log("Olá ", nome, "! Você tem ", idade, "anos.")

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

const idadeFutura = Number(idade) + 7

// console.log("Olá, ", nome, "! Você tem ", idade,  "anos. Em sete anos você terá ", idadeFutura)

// Exercício 2
    
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const soma = num1 + num2
// console.log("Resultado:", soma)

// Exercício 3
    
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const adiconarTarefa = () => {
    const listaDeTarefas =  { tarefas: ["Lavar louça", "Aspirar a casa"]}
    const novaTarefa = process.argv[2]

    listaDeTarefas.tarefas.push(novaTarefa)
    console.log("Tarefa adicionada com sucesso!")
    console.table(listaDeTarefas)
}
adiconarTarefa()

