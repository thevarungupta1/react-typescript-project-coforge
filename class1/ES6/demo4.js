function foo(...args){
    console.log(...args)
}

foo(1)
foo(1,2)
foo(1,2,3,4,5,6)


function test(a, b, ...args){
    console.log(a)
    console.log(b)
    console.log(...args)
}

test('A', 'B', 1,2,3,4)


// rest parameter should be last parameter in the list
// function some(...args, a, b){

// }
