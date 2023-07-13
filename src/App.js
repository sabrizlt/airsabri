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
import Aggiornamenti from "./components/Aggiornamenti";
import Offerte from "./components/Offerte";
import Preferiti from "./components/Preferiti";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div>
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
          <Route path="/Offerte" element={<Offerte />} />
          <Route path="/Aggiornamenti" element={<Aggiornamenti />} />
          <Route path="/Preferiti" element={<Preferiti />} />
        </Routes>
      </Router>
      <ToastContainer />

    </div>
    </>
  );
}

export default App;
