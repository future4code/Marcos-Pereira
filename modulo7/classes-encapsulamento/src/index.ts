// Exercício 1

// a) serve para inicializar o objeto com valores atribuídos

// b) 
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    // private transactions: Transaction[] = [];
  
    constructor(
       cpf: "123.456.789-00",
       name: "Marcos",
       age: 29,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf = () => this.cpf
    public getName = () => this.name
    public getAge = () => this.age
  }

  // c) através dos métodos getters e setters


  // Exercício 2

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }
  
  public getDate = () => this.date
  public getValue = () => this.value
  public getDescription = () => this.description
}

const transactions = new Transaction("10/05/2022", 100, "Pago hoje")
transactions.getDate()


// Exercício 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }