class Customer {
  custId: number;
  firstName: string;
  lastName: string;

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const customer = new Customer();
customer.custId = 1;
customer.firstName = "Mark";
customer.lastName = "Watson";
customer.getFullName();
