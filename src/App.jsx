import "./App.css";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Works } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
