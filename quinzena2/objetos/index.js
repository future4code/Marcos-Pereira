/*Exercícios de Interpretação

## Exercício 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?
Imprime: Matheus Nachtergaele, Virginia Cavendish e Globo 14h


## Exercício 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?
O primeiro console.log imprime: Juca, 3, SRD
O segundo consolo.log imprime: Juba, 3, SRD
O terceiro console.log imprime: Jubo, 3, SRD

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Copia todas as informações de um objeto

## Exercício 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
O primeiro console.log imprime false
O segundo console.log imprime undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
O primeiro console.log imprimiu false porque é o valor atribuído à backender(booleano).
O segundo imprimiu undefined porque altura não foi decalarada em nenhum momento*/



/*Exercícios de escrita 

## Exercício 1

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"*/

const pessoa = {
    nome: "Marcos",
    apelidos: ["Marquinhos", "Marcão", "Magrelo"]
}
 function resultado(pessoa){
     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
 }
 resultado(pessoa)

 /*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto*/

const novosApelidos = {...pessoa, apelidos: ["Apelido 1", "Apelido 2", "Apelido 3"]}
resultado(novosApelidos)

/* ## Exercício 2

a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

const objeto1 = {
    nome: "Marcos",
    idade: 28,
    profissao: "Desenvolvedor"
}

const objeto2 = {
    nome: "Gabriela",
    idade: 28,
    profissao: "Professora"
}

/* b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
O valor de nome
O numero de caracteres do valor nome
O valor de idade
O valor de profissão
O numero de caracteres do valor profissão */

function minhaFuncao(){
    console.log([objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length, objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length])
}
minhaFuncao(objeto1, objeto2)

/* ## Exercício 3

a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho*/

const carrinho = []

/*b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)*/

const fruta1 = {
    nome: "Melão",
    disponibilidade: true
}

const fruta2 = {
    nome: "Melancia",
    disponibilidade: true
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true
}

/*c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.*/

const frutasSacolao = (fruta) => {
    console.log(fruta)
    carrinho.push(fruta)
}
frutasSacolao(fruta1)
frutasSacolao(fruta2)
frutasSacolao(fruta3)

/*d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. */

console.log(carrinho)