//Exercícios de interpretação

/* let array
 console.log('a. ', array)*/
//undefined

/* array = null
console.log('b. ', array)*/
//null

/* array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)*/
//11

/* let i = 0
console.log('d. ', array[i])*/
//3

/* array[i+1] = 19
console.log('e. ', array)*/
//(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12,13]

/* const valor = array[i+6]
console.log('f. ', valor)*/
//9

/*Exercício 2*/

// SUBI NUM ONIBUS EM MIRROCOS 27



//Exerícios de escrita

/* 1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/

const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Digite seu e-mail")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}`)

/*2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

a) Imprima na tela o array completo*/

const comidas = ["canelone", "hambúrguer", "macarrão", "pizza", "churrasco"]
console.log(comidas)

/* b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.*/

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

/* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista*/

let comidaUsuario = prompt("Qual a sua comida preferida?")
const trocaComidas = comidas.splice(1, 1, comidaUsuario)
console.log(comidas)

/* 3 - Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array na tela

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array na tela*/


const listaDeTarefas = []

const tarefa1 = prompt("Digite sua primeira tarefa:")
const tarefa2 = prompt("Digite sua segunda tarefa:")
const tarefa3 = prompt("Digite sua terceira tarefa:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("Digite o número da tarefa realizada:"))

const novaLista = Number(listaDeTarefas.splice(listaDeTarefas, 1))
console.log(listaDeTarefas)

//Falta resolver esse último