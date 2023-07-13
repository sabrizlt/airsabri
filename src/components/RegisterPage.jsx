import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";


const RegistrationPage = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registrazione avvenuta con successo");
        alert("Registrazione avviata con successo");
      } else {
        console.log("Errore durante la registrazione " + formData);
        alert("Errore durante la registrazione");
      }
    } catch (error) {
      console.log(
        "Si è verificato un errore durante la richiesta di registrazione"
      );
      alert(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
    <div>
    <Particle/>
    </div>
    <Container className="py-5">
      <Row>
        <Col xs={8} md={6} lg={5} xl={4} xxl={3} className="mb-4 login-box">
          <h1 className="my-3 text-primary text-center">REGISTRAZIONE</h1>
          <form>
            <div className="user-box">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                required
              />
              <label>Lastname</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>

            <center>
              <center>
                <Link
                  to={"/home"}
                  className="color-white"
                  onClick={handleSubmit}
                >
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className=""
                  >
                    REGISTER
                  </Button>

                  <span></span>
                </Link>
              </center>
            </center>
          </form>
          <Link to="/login-page" className="text-decoration-none">
            <div className="text-secondary text-decoration-none text-center">
              Sei già registrato? Login!
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default RegistrationPage;
