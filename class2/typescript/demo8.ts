// class Customer{

//      custId: number;
//      firstName: string;
//      lastName: string;

//      constructor(custId: number, firstName: string, lastName: string){
//         this.custId = custId;
//         this.firstName = firstName;
//         this.lastName = lastName;
//      }

//      getFullName(){
//          console.log(`${this.firstName} ${this.lastName}`)
//      }
// }

class Customer {
  constructor(
    private custId: number,
    public firstName: string,
    public lastName: string
  ) {}

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const customer = new Customer(1, "Paul", "Watson");
customer.getFullName();
