import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./Screen/home";
import ErrorPage from "./Component/errorPage";
import Header from "./Component/header";
import Contact from "./Screen/contact"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
