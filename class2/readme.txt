# TypeScript

It is a wrapper on top of javascript
which provide easy and simple syntex
It also provide OOPs features


Typescript-----------> Transpile / compile --------------> JavaScript

Typescript
Babel
WebPack


> npm install typescript -g
> npm i typescript -g

> npm i typescript@3.1 -g
> npm i typescript@latest -g

> tsc --version


# Why Typescript
- compile time verification
- best compatiable version of javascript
- strongly type code




# React

- React is a javascript library which we use to build frontend or user interface
- it is a not a framework like angular
- react is a tool for building UI components

# Important features of React
- JSX
- Component
- One way data binding
- Virtual DOM
- Simplicity
- Performance

# Why we use React
- DOM is slow in its real form
- React uses virtual DOM, which is significantly faster and more efficient to update
- Simple and easy to learn
- Reusability
- Robust re-rendering with virtual DOM
- Native libraries
- Performance
- Easy Testing


# Angular vs React
React
- it is library
- one way data binding
- JSX (JavaScript XML)
- does not support entirly dependency injection
- virtual DOM
- easier to learn

Angular
- it is a framework
- two way data binding
- Typescript
- support dependency injection
- Incremental DOM
- head to learn

# Step
- Node.js
- vscode


# Create a new project
> npm i create-react-app -g
> create-react-app --version
> create-react-app <project_name>
> cd <project_name>
> npm start

http://localhost:3000

> npx create-react-app <project_name>
> cd <project_name>
> code .
> npm start


# Understand folder structure
package.json - this is npm configuration file. it includes details about your app (meta data) it includes
               list of dependencies and some script.

package-lock.json - this is auto generated file that get updated whenever npm does any opeartion on
                    package.json file

node_modules - this folder contain the dependencies source code require for react project
                > npm install

public - this folder contain public assets of the app
         it contain index.html where react will mount application root component

.gitignore - this file used by git to ignore file and folder while publishing source code into remote server

README.md - it provide the documentation to read

src - source - it contain the application source code where you mostly create files

there are 3 files together form root / app component
App.css - style sheet
App.test.js - test case
App.js - main js file


index.css - global css file

index.js - main entry point of the app like main method


# Component in React
- in react a component represent a part of user interface
- what ever is visible on the web page is a component, we can put component together to make a bigger 
  component (pages / container)
- component are reusable and make the app more modular

# Type of Components
1. class component
2. functional component


Extensions
- Bracket colorized
- REact Simple Snippet
- Prettier




# JSX
JSX = javascript + XML
extension to the javascript language syntex
write xml like code for elements and components
JSX is not necessary to write in react app this is for our convience only
JSX can be consider as syntactical expression of javascript syntex, used to create react elements



# Why JSX?
- faster then javascript in compilation and expression
- ensure optimization during transpilation of the code to JS
- ensure better optimization as it allow react to hightlight usefull error and message of warning at compile time
- using JSX developer find easier to work with component of react having UI inside the JS code



class - className
for   - htmlFor
onclick	- onClick



# Props and State

props -> properties -> send data between the component
state -> data -> to maintain the data with in a component



# Props vs state
1. props are passed to the component where as state is managed with in component
2. props are immutable where as state can be changed
3. In functional component we can pass as function parameter where as we declare variable with a function
   body as state











