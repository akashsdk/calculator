import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./Component/errorPage";
import Header from "./Component/header";
import Footer from "./Component/Footer";
import Contact from "./Screen/contact"
import About from "./Screen/About";
import GpaCalculator from "./Card/GpaCalculator";
import NormalCalculator from "./Card/NormalCalculator";
import ScientificCalculator from "./Card/ScientificCalculator";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/gpa-calculator" element={<GpaCalculator />} />
          <Route path="/normal-calculator" element={<NormalCalculator />} />
          <Route path="/scientific-calculator" element={<ScientificCalculator />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
