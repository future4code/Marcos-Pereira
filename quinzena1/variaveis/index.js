// Exercícios de interpretação de código

// 1 - imprimirá no console 10, e depois 10 e 5
// 2 - imprimirá no console 10, 10 e 10
// 3 - let p será = horasTrabalhadas e let t = valorDiario

/* Exercícios de escrita de código
Exercício 1*/

let nomeUsuario
let idadeUsuario 
console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)
/* imprimiu undefined, pois não tem valor atribuído às variáveis*/

const nome = prompt('Qual o o seu nome?')
let idade = prompt('Qual a sua idade?')
console.log(typeof nome)
console.log(typeof idade)
/* Imprimiu string, pois tudo que sai do prompt sempre será string*/
console.log('Olá', nome, 'você tem', idade, 'anos.')

//Exercício 2

const roupaBranca = true
const roupaPreta = false
const roupaAmarela = false
console.log('Sua roupa é branca?', roupaBranca)
console.log('Sua roupa é preta?', roupaPreta)
console.log('Sua roupa é amarela?', roupaAmarela)

//Exercício 3

let a = 10
let b = 25
let c
c = a
a = b
b = c
console.log('O novo valor de a é', a)
console.log('O novo valor de b é', b)