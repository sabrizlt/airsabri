import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PaginaTratte from "./components/PaginaTratte";
import Home from "./components/Home";
import OpeningPage from "./components/OpeningPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import PaginaRivista from "./components/PaginaRivista";
import Biglietto from "./components/Biglietto";
import { ToastContainer } from 'react-toastify';
// import Particle from "./components/Particle";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div>
    {/* <Particle/> */}
    </div>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/OpeningPage" element={<OpeningPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tratte" element={<PaginaTratte />} />
          <Route path="/Rivista" element={<PaginaRivista />} />
          <Route path="/Viaggi" element={<Biglietto />} />
        </Routes>
      </Router>
      <ToastContainer />

    </div>
    </>
  );
}

export default App;
