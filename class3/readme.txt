# State

Class Component - Statefull componment - which can maintain state or data
Functional Component - Stateless component - which cannot have state before React v16

but the introduction of hooks we can manage state in functional component also

# Event 
An events is action that could be triggered by user interaction or can be the result of system generated event

In React like javascript it has its specified methods to handle the events, which are conceptually similar
to handling events on DOM element

for example
click - onclick - onClick
blur - onblur- onBlur
change - onchange - onChange
etc

Event handler will be passed instance of Syntetic event, a cross browser wrapper arounf the browser native event
it has the same interface as browser native events including preventDefault() except the work identically
across all browser

React handle its event using its own event handling system know as syntatice events

There are some syntactical difference in handling events with React from handling the event on DOM
1. React events are name as camelCase instead of lowercase

	click - onclick - onClick

2. JSX function is  passed as the eventHandler instead of a string

	onclick="onClick()"
	onClick= { onClickHandler }

3. we cannot return false in React to prevent a default behaviour instead we can use explicity 
   preventDefault() to prevent the same



- In React the this keyword should represent the component that own the method
- if you want to use a regular function instead of arrow function then you have to bind this to the component
  instance using the bind() method

# Why arrow function?
the this keyword in class component is not define by default, so with regular function this keyword represent
the object that called the method which can be anything like global object or html button

arrow function should be use as with arrow function this will always represent the object that define the 
arrow function


# Conditional Rendering
- if / else
- element value
- ternery opeartor
- circut breaker


		true		false
(condition) ? <statement1> : <statement2>


# List
key - we have to provide a unique key to every element of the row when generating list


map()


# Http

- axios
- request
- fetch


> npm i axios --save   // project dependency
> npm i axios --save-dev   // development dependency - x


Http verbs
- Get - read
- Post - create / insert
- Put - update
- Delete - delete


Request
 - header - meta deta - content-type / token / api-key
 - body - form data


status code
200 - ok - success
201 - created
400 - bad request
401 - unauthorized
404 - not found
500 - server error



# React Forms
- forms are essential part of any application as it allows user to interact with your application
- forms can be use to take information from the user
- forms can contain different type of elenments to take different type of inputs
- forms can execute multiple task depending upon the nature of the app
- forms can contain textbox, radio etc

# creating forms
- react provide a statefull and faily reactive approach to create, design and build a form
- instead of DOM element, its the component that handle the react form
- there are primilary two kind of forms input in react
1. controlled component - useState()
2. uncontrolled component - useRef()

# Controlled component
- the input form element is handled by the component itself with mutable state being kept in the state property
 and is only updated using setState() method
- function mediate the data passing into them on every onChange event instead of having the data only once 
- this passed data is saved to the state and update using setState() method enabling the component to gain
  better control over form element
- for element like <input> and <button> in html generally maintain their own state













