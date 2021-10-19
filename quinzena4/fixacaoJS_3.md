```function calculaNota(ex, p1, p2) {

  let pesoP1 = p1*2
  let pesoP2 = p2*3
  let mediaPonderada = ((ex + pesoP1 + pesoP2) / 6)
  let nota
  
  if(mediaPonderada >= 9){
    nota = "A"
  }else if(mediaPonderada < 9 && mediaPonderada >= 7.5){
    nota = "B"
  }else if(mediaPonderada < 7.5 && mediaPonderada >= 6){
    nota = "C"
  }else{
    nota = "D"
  }
 return nota
}