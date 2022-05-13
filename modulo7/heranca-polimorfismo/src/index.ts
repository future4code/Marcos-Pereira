// Exercício 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
        public interoduceYourself(): string {
                return `Olá, sou ${this.name}. Bom dia!`;
        }
    }

  const user = new User("id único", "email@email.com", "Nome", "senha")
  
  // a) não

  // b) uma vez

  
//   Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const customer = new Customer("outro id único", "email2@email.com", "Nome Sobrenome", "senhanova", "número do cartão")
  customer.interoduceYourself()

  // a) três vezes


  // Exercício 3

  // a) não, porque é uma informação privada