import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Screen/home";
import ErrorPage from "./Component/errorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
