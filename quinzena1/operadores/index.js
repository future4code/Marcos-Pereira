//Exercícios de interpretação de código

/* 1 - a. imprime false
b. imprime false
c. imprime true
d. imprime boolean */

/* Exercício 2
Imprimirá a junção e não a soma dos sois números*/

/* Exercício 3 
Solução para o exercício 2

let primeiroNumero = Number (prompt("Digite um número!"))
let segundoNumero = Number (prompt("Digite outro número!"))

const soma = primeiroNumero + segundoNumero
console.log(soma)*/

/*Exercícios de escrita de código
Exercício 1 */

let idade = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo?")

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
console.log(idade - idadeAmigo)

//Exercício 2

let numero = prompt("Digite um número par")
console.log(numero % 2)

/*O resultado sempre será 0, e se inserir um número ímpar sempre será 1*/

//Exercício 3

let suaIdade = Number(prompt("Quantos anos você tem?"))
console.log("Sua idade em meses é:", suaIdade * 12)
console.log("Sua idade em dias é:", suaIdade *365.25)
console.log("Sua idade em horas é:", suaIdade * 8766)

//Exercício 4 

let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))
let restoDivisao1 = primeiroNumero % segundoNumero
let restoDivisao2 = segundoNumero % primeiroNumero
let divisivel1 = restoDivisao1 === 0
let divisivel2 = restoDivisao2 === 0

console.log("O primeiro número é maior que o segundo", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo?", divisivel1)
console.log("O segundo número é divisível pelo primeiro?", divisivel2)