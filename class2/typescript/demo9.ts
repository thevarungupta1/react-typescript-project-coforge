class Employee{
    empId: number;
    firstName: string;
    lastName: string;
    email: string;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

class FullTimeEmployee extends Employee{
    annualSalary: number;
}

class PartTimeEmployee extends Employee{
    hourSalary: number
}

const fte = new FullTimeEmployee();
fte.firstName = 'Mark';
fte.lastName ='Smith';

const pte = new PartTimeEmployee();
pte.firstName = 'Paul';
pte.lastName = 'Watson';

fte.getFullName();
pte.getFullName();

