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
var Customer = /** @class */ (function () {
    function Customer(custId, firstName, lastName) {
        this.custId = custId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.getFullName = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer(1, 'Paul', 'Watson');
customer.getFullName();
