// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []

  for(let i = array.length - 1; i >= 0; i--){
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}  

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayNumerosPares = []

  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      arrayNumerosPares.push(array[i] ** 2)
    }
  }
  return arrayNumerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPares = []

  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      arrayPares.push(array[i])
    }
  }
  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]

  for(let numero of array){
    if(numero > maiorNumero){
      maiorNumero = numero
    }
  }
  return maiorNumero
}

retornaMaiorNumero(array)

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const quantidade = array.length
  return quantidade
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3
  
  const resultado = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3, (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3), !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return resultado
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []

  for(let i = 0; numerosPares.length < n; i++){
    if(i % 2 === 0){
      numerosPares.push(i)
    }
  }
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && b !== c && a !== c){
    return 'Escaleno'
  }else if(a === b && b === c){
    return 'Equilátero'
  }else{
    (a === b && b !== c) || (a !== b && b === c)
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior
  let menor 

  if(num1 > num2){
    maior = num1
    menor = num2
  }else{
    maior = num2
    menor = num1
  }
  let maiorDivisivelPorMenor = (maior % menor) === 0
  let diferenca = (maior - menor)
  return {
    "maiorNumero": maior,
    "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
    "diferenca": diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const len = array.length
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < len;j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {"nome":"O Diabo Veste Prada","ano":2006,"diretor":"David Frankel","atores":["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]}
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {"nome":"O Diabo Veste Prada","ano":2006,"diretor":"David Frankel","atores":["Meryl Streep"," Anne Hathaway"," Emily Blunt"," Stanley Tucci"]}
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const perimetro = 2 * (lado1 + lado2)
  const area = lado1 * lado2

  return {"largura": lado1, "altura": lado2, "perimetro": perimetro, "area": area}
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const anonimo = {... pessoa, nome: "ANÔNIMO"}
  return anonimo
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}