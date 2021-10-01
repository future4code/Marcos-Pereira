/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blacjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const soma1 = carta1.valor + carta2.valor
   console.log("Usuário - cartas: " + carta1.texto, carta2.texto + " - pontuação " + soma1)

   const carta3 = comprarCarta()
   const carta4 = comprarCarta()
   const soma2 = carta3.valor + carta4.valor   
   console.log("Computador - cartas: " + carta3.texto, carta4.texto + " - pontuação " + soma2)

   if(soma1 > soma2){
      console.log("O usuário ganhou!")
   }else if(soma1 < soma2){
      console.log("O computador ganhou!")
   }else{
      console.log("Empate!")
   }
}else{
   console.log("O jogo acabou!")
}