import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Home />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
