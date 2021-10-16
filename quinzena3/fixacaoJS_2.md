```function calculaPrecoTotal(quantidade) {
  let valorDaCompra
  if(quantidade < 12){
  valorDaCompra = quantidade * 1.30
  } else if(quantidade >= 12){
   valorDaCompra = quantidade * 1
  }
  return valorDaCompra
}