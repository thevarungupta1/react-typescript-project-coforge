- Inter communication between the components
1. props
2. Context API - this is part of React Library
3. State Management Library - Redux / Flux etc

- Redux
Redux is a javascript based library used for state management

State = Data

- the idea is to maintain cenrally / globally data which can be accessed by any component irrespective
of the position and order of the component otherwise we have to pass data to each and every component
in the component tree

- misconseption: redux is a part of the react library whiuch is wrong
redux canb be used in any project which is using JavaScript



 Redux Architecture
it consist of three main components
- store
- action
- reducer


store: a place where an entire state of the app is listed and managing the status of the app at given
       point of time

action: a pure object containbed with in store having the information about the user event, the action is 
        view to the reducer

reducer: reducer is a function which is able to read the payload from the action and then execute updating
         the store


- Redux with React

Steps 1: install required dependencies  
> install i redux - it is native library
> install i react-redux - it is special package developed to work redux with react

Step 2:
create store/index.js

Step 3:
create initialState

// initial state
const initialState = {
  counter: 0,
};

Step 4:
create reducer

// reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};


step 5:
create store

// create store
const store = createStore(counterReducer);

Step 6:
configure store with react app
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


Ste7:
consume store in react components


- Testing

What is Testing?
testing is the process of checking functionality of an application to ensure it runs as per requirement
unit testing is one of the most commonly used type of testing

- unit testing
- integration testing
- end to end testing

unit testing
- it means testing the smallest unit of the application
it plays a crucial role in the test driven development
unit testing is all about testig method individually and in the isolation


What to test
what -> test the different building block-> the smallest building block that make your app

How
jest -> it is a tool for running our tests and asserting the result
React testing library -> it is a tool for simulating our react app / component

both the tools are already setup for your app when we create app using create-react-app


Triple A - golden rule for unit testing

A - Arrange
A - Act
A - Assert









