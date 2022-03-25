var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.getFullName = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer();
customer.custId = 1;
customer.firstName = "Mark";
customer.lastName = "Watson";
customer.getFullName();
