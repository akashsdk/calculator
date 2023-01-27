import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./Screen/home";
import ErrorPage from "./Component/errorPage";
import Header from "./Component/header";
import Contact from "./Screen/contact"
import About from "./Screen/about";
import GpaCalculator from "./Card/gpaCalculator";
import NormalCalculator from "./Card/normalCalculator";
import ScientificCalculator from "./Card/scientificCalculator";

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
      </div>
    </BrowserRouter>
  );
}

export default App;
