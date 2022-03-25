const employees  =[
    { id: 1, firstName: 'Mark', lastName: 'Smith', gender: 'Male' },
    { id: 2, firstName: 'Paul', lastName: 'Clark', gender: 'Male' },
    { id: 3, firstName: 'Stacy', lastName: 'Watson', gender: 'Female' },
    { id: 4, firstName: 'John', lastName: 'Page', gender: 'Male' }
];

// Print employee full name with title - map()
// Mr.Mark Smith
// Mrs. Stacy Watson

const newList = employees.map(emp => transform(emp))


function transform(employee){
    if(employee.gender=='Male'){
        return `Mr.${employee.firstName} ${employee.lastName}`
    }else{
        return `Mrs.${employee.firstName} ${employee.lastName}`
    }
}

console.log(newList)