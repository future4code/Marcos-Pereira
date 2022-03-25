// - **Exercício 1**
    
//     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 2

// R: É apresentado um erro porque a variável só pode receber string, pois foi definido que seu tipo é string
    
//     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 10

// R: colocando um pipe e o outro tipo que a variável pode receber

//     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

const modeloPessoa = (nome: string, idade: number, corFavorita: string)
:{
    nome: string,
    idade: number,
    corFavorita: string
} => {
    const pessoa = {nome, idade, corFavorita}
    return pessoa
}

const pessoa1: {} = {
    nome: "Marcos",
    idade: 28,
    corFavorita: "Azul"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa2: Pessoa = {
    nome: "Gabriela",
    idade: 28,
    corFavorita: "Preto"
}

const pessoa3: Pessoa = {
    nome: "João",
    idade: 21,
    corFavorita: "Branco"
}

const pessoa4: Pessoa = {
    nome: "Pedro",
    idade: 18,
    corFavorita: "Vermelho"
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum corFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}