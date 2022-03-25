// not using default parameter

function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}

say('Hello')  // Hello
say() // undefined


// using default parameter
function say2(message = 'Hi'){
    console.log(message)
}

say2('Hello 2')
say2()
