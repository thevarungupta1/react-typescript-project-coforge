const Person = class{
    firstName;
    lastName;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const person = new Person();
person.firstName = 'Paul'
person.lastName = 'Watson'

person.getFullName();