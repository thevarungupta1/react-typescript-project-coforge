# ES6  /ECMA Script

- let
- const 
- default parameters
- rest parameters
- spread operator
- destructing
- for..of loop
- template literal
- modules
- map()
- arrow function
- class
- inherietence

# Setup

Node.js - https://nodejs.org/en/

> node --version
> npm --version

VSCode - https://code.visualstudio.com/



# let
the let keyword is similar to the var keyword except that these variables are blocked scope

# const
it is a new keyword of declaraing a constant by using the const keyword
the const keyword create a read-only value
variable declared by the const keyword can't be reassigned

# default parameters


# rest parameters
ES6 provides a new kind of parameter called rest parameters that has prefix of three (...)
a rest parameter allows you to represent an indefinite number of argument as an array
it should be the last parameter in the list of parameter
it should be prefix with ...

# Spread  operator
ES6 provides a new opeartor called spread opeartor that consist of three dots (...)
the spread opeartor allows you to spread out elements of an iterable object such as array, map, set, etc

# destructing
ES6 provides a new feature called destructing assignment that allows you to destructire
properties of an object or elements of an array into individual variable

# for..of

# template literal
Prior to the ES6 we use single or double quotes to wrap a string
backtick(`)

multiline string
string formatting
html eascaping

# Array function
new short hand syntex to write function in javascript

(parameters) => {expresson}

Array function syntex consist of 3 component

() -  bracket where we can have list of parameters
=> fat arrow operator
{} - expresson



# map function
the map() method create a new array with the result of calling a function for every array element
the map() method call the provided function once for each element in an array in order

class

inherietence


modules

DRT - dont repeat yourself

# Promises
- Promises are used to perform asynchoronous operation
- A promise is an object that may produce a single value in the future
- they are easy to manage when dealing with multiplr asynchronous opeartion where callback it can 
  create callback hell
- it is possible to chain promises with precise control over how and where error are handled this is   
  called promise channing


  # Benefites of promises
  1. imrove code readability
  2. better handling of asynchronoius opeartion
  3. better flow of asynchoronous logic
  4. btter error handling


# Promises has four states
- fulfilled - a promise is succeeded
- rejected - when promise fail
- pending - promise is still pending
- settled - final state where promise has either resolved or rejected


# How to create a promise 
- a promise can be created using promise constructor
- promise constructor just take one parameter as an argument, a callback function
- callback function further take two arguments, resolve and reject
- the opeartion is performed insde the call function
 - resolve - when result is a success
 - reject - when result is failure


var promise = new Promise((resolve, reject) => {
	// task
})


# promise can be consumed by registering function using
then() -  it is used for executing the code when promise is either resolved or rejected
catch() - it is used for some error handling or when promise is rejected



# Async / Await
- async and await are extensions of promises
- the async function opeartes asynchronosly thright event loop
- it will return the promise object either to be resolved with value return by async function or to be rejected
- an async function can have an await expression that makes the execution of asycn function to pause till time the 
  passed promise value is resolved


async () => { await }

async function foo(){
   await
}


	



