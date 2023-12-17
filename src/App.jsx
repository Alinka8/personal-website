import { Route, Routes } from "react-router";
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
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes> */}
    </div>
  );
}

export default App;
