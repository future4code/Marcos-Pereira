export type Extrato = [
    {
        valor: number,
        data: string,
        descricao: string
    }
]

export type Conta = {
    nome: string,
    CPF: number,
    nascimento: string,
    saldo: number
}

export const usuarios: Conta[] = [
    {
        nome: "Marcos",
        CPF: 12345678900,
        nascimento: "07/05/1993",
        saldo: 100
    }
]
