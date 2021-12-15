import "./App.scss";
import Footer from "./js/components/Footer";
import Navbar from "./js/components/Navbar";
import RoutesComponent from "./js/components/RoutesComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
