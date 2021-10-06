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
  const numerosPares = []
  let par = 0
  let i = 0

  while(i < n){
    i++
    numerosPares.push(par)
    par = par + 2
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
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

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