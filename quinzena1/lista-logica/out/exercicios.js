// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt("Digite um número")
  const largura = prompt("Digite outro número")

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atual")
  const anoNascimento = prompt("Digite o ano que você nasceu")

  console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  const peso = prompt("Digite seu peso")
  const altura = prompt("Digite sua altura")

  console.log(Number(peso) / Number(altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  const coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const frase = prompt("Digite algo aqui")
  const fraseMaiuscula = frase.toUpperCase()

  console.log(fraseMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt("Qual o custo de um espetáculo de teatro?")
  const valorIngresso = prompt("Qual o valor de cada ingresso?")

  console.log(Number(custoEspetaculo) / Number(valorIngresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const palavra1 = prompt("Digite uma palavra")
  const palavra2 = prompt("Digite outra palavra")
  const comparaPalavras = palavra1.length === palavra2.length

  console.log(comparaPalavras)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite uma palavra")
  const string2 = prompt("Digite outra palavra")

  console.log( string1.toUpperCase() === string2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano que você nasceu"))
  const emissaoIdentidade = Number(prompt("Digite o ano de emissão da sua carteira de identidade"))
  const renova5 = anoAtual - anoNascimento <= 20 === anoAtual - emissaoIdentidade >= 5
  const renova10 = anoAtual - anoNascimento > 20 <= 50 === anoAtual - emissaoIdentidade >= 10
  const renova15 = anoAtual - anoNascimento > 50 === anoAtual - emissaoIdentidade >= 15
  const resultado = renova5 !== renova10 === renova15

  console.log(resultado)
}

// Exercício 11
function checaAnoBissexto() {
  const anoUsuario = Number(prompt("Digite um ano"))
  const multiplo4 = anoUsuario % 4 === 0
  const multiplo100 = anoUsuario % 100 === 0
  const multiplo400 =  anoUsuario % 400 === 0

  console.log(multiplo4 === multiplo100 === multiplo400)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
<<<<<<< HEAD
  const idadeUsuario = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let maior18 = true
  let medioCompleto = true
  let estaDisponivel = true
  const resultado = maior18 && medioCompleto && estaDisponivel

  console.log(resultado)
}
//falta finalizar esse exercício
=======
  const idadeUsuario = prompt("Você tem mais de 18 anos?") === "sim"
  const escolaridade = prompt("Você possui ensino médio completo?") === "sim"
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"

  const resultado = idadeUsuario && escolaridade && disponibilidade
  console.log(resultado)
}
>>>>>>> 17ad9887500478a7169e8d93e7fbdc67ef913be1
