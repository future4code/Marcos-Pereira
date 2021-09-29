/* Exercícios de interpretação

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)

R: Imprimirá 10 no console

2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

a) O que vai ser impresso no console?

R: Todos os números maiores que 18

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se não, o que poderia ser usado para fazer isso?

R: Sim, o for...of... passa por todos os elementos da lista

3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteirscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha+= "*"
    }
    console.log(linha)
    quantidadeAtual++
}

R: 4 linhas de asteriscos

#################################################

Exercícios de escrita

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dados em uma variável.

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

c) Por fim, imprima o array com os nomes dos bichinhos no console.
*/

// let quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let nomePets = []

// if (quantidadePets === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else if(quantidadePets > 0){
//     for(let i = 0; i < quantidadePets; i++){
//         let pets = prompt("Digite os nomes dos seus pets, um de cada vez.")
//         nomePets[i] = pets
//     }
//     console.log(nomePets)
// }

/*2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:*/

const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*a) Escreva um programa que imprime cada um dos valores do array original.*/

function primeiroArray(arrayOriginal){
    for(let valores of arrayOriginal){
        console.log(valores)
    }
}
primeiroArray(arrayOriginal)

/*b) Escreva um programa que imprime cada um dos valores do array original divididos por 10.*/

function arrayDividido(arrayOriginal){
    for(let valoresDivididos of arrayOriginal){
        console.log(valoresDivididos / 10)
    }
}
arrayDividido(arrayOriginal)

/*c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array.*/

let arrayPares = []

function arrayNumerosPares(arrayOriginal){
    for(let valoresPares of arrayOriginal){
        if(valoresPares % 2 === 0){
        arrayPares.push(valoresPares)
        }
    }
    console.log(arrayPares)
}
arrayNumerosPares(arrayOriginal)

/*d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.*/

let arrayStrings = []

function arrayDeStrings(arrayOriginal){
    for(let i = 0; i < arrayOriginal.length; i++){
        let valoresString = "O elemento do índex " + i + " é:" + arrayOriginal[i]
        console.log(valoresString)
    }
}
arrayDeStrings(arrayOriginal)

/*e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.*/

function maiorNumeroArray(arrayOriginal){
    let maiorNumero = arrayOriginal[0]
    for(let maiorDoArray of arrayOriginal)
        if(maiorDoArray > maiorNumero){
            maiorNumero = maiorDoArray
        }
    return maiorNumero
}
//console.log(maiorNumeroArray(arrayOriginal))

function menorNumeroArray(arrayOriginal){
    let menorNumero = arrayOriginal[0]
    for(let menorDoArray of arrayOriginal)
        if(menorDoArray < menorNumero){
            menorNumero = menorDoArray
        }
    return menorNumero
}
//console.log(menorNumeroArray(arrayOriginal))
console.log("O maior número é", maiorNumeroArray(arrayOriginal), "e o menor é", menorNumeroArray(arrayOriginal))