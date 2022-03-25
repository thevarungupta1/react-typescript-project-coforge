import Employee from "./components/Employee";
import Person from "./components/Person";
import ProductList from "./components/ProductList";
import Student from "./components/Student";

function App() {
  return (
    <div className="container">
      {/* <Person name="mark" />
    <Person name="paul"/>
    <Person name="watson"/> */}

      {/* <Student id="1" name="mark" email="m@gmail.com" />
      <Student id="2" name="paul" email="p@gmail.com" />
      <Student id="3" name="watson" email="w@gmail.com" /> */}


      {/* <ProductList /> */}

      <Employee data={{ id:1, name: 'Mark', email:"m@gmail.com" }} />

    </div>
  );
}

export default App;
