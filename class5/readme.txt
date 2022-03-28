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









