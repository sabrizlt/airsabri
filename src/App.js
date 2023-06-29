import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PaginaTratte from "./components/PaginaTratte";
import Home from "./components/Home";
import OpeningPage from "./components/OpeningPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/OpeningPage" element={<OpeningPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tratte" element={<PaginaTratte />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
