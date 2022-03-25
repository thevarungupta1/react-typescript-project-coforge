class Person{
    firstName;
    lastName;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let person = new Person();
person.firstName = 'Mark';
person.lastName  ='Watson';
person.getFullName();