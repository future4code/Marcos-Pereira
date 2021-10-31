```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  for(let numero of arrayDeNumeros){
    if(numero === numeroEscolhido){
    contagem++
    }
  }
  if(contagem > 0){
    return `O número ${numeroEscolhido} aparece ${contagem} 3x`
  }else{
    return "Número não encontrado"
  }
}