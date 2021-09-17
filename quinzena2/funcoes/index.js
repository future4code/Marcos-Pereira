/* Exercícios de interpretação*/

// 1-a) Será impresso 10 e 50

// b) Não imprimirá nada

// 2-a) Essa função verifica se no texto inserido pelo usuário existe a palavara cenoura 

// b) imaginei que sairia true somente na primeira opção, executando o código vi que sai true para todas

/* Exercícios de escrita
1-a)*/

function imprimeInformacoes(){
    console.log("Eu sou Marcos, tenho 28 anos, moro em São Paulo e sou estudante.")
}
imprimeInformacoes()

//b) 

function informacoes(nome, idade, cidade, profissão){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}
informacoes("Marcos", "28", "São Paulo", "atendente de call center")

// 2-a)

function somaNumeros(numero1, numero2){
const soma = numero1 + numero2
return soma
}
console.log(somaNumeros(5, 10))

//b)

function numeros(primeiroNumero, segundoNumero){
    const numeroMaior = primeiroNumero >= segundoNumero
    return numeroMaior
}
console.log("O primeiro número é maior ou igual o segundo?", numeros(3, 9))

//c)

function numeroParOuNao(numeroPar){
    const numeroEhPar = numeroPar % 2 === 0
    return numeroEhPar
}
console.log("O número é par?", numeroParOuNao(10))

//d)

function mensagem(){
    const texto = prompt("Digite uma mensagem")
    console.log(`${texto.toUpperCase()} tem ${texto.length} letras`)
}
mensagem()
//Só consegui fazer essa chamando o prompt

//3 -

function operações(){
    const numero1 = Number(prompt("Digite um número"))
    const numero2 = Number(prompt("Digite outro número"))
    const soma = numero1 + numero2
    const diferenca = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2
    console.log(`Números inseridos: ${numero1} e ${numero2}\nSoma: ${soma}\nDiferença: ${diferenca}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`)
}
operações()