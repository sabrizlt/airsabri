import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocalStorage } from "react-use";
import Particle from "./Particle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const [token, setToken] = useLocalStorage("token", "");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        let data = await response.json();
        console.log("Login successful" + data.accessToken + formData.userName);
        setToken(data.accessToken);
        localStorage.setItem("username", formData.userName);
        navigate("/home");
        toast.success("BENVENUTO: " + formData.userName)
      } else {
        console.log("Login failed");
        toast.error("L'username o la password non sono corretti!");
      }
    } catch (error) {
      console.log("An error occurred while logging in");
      alert(error);
    }
  };

  return (
    <>
      <div>
        <Particle />
      </div>
      <Container className="py-5">
        <Row>
          <Col xs={8} md={6} lg={5} xl={4} xxl={4} className="mb-4 login-box">
            <h1 className="my-3 text-primary text-center">LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="userName"
                  required
                  value={formData.userName}
                  onChange={handleChange}
                />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <label>Password</label>
              </div>
              <center>
                <Link to={"/home"} type="submit" className="color-white">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className="rounded-0"
                  >
                    LOGIN
                  </Button>
                </Link>
              </center>
            </form>
            <Link to="/register-page" className="text-decoration-none">
              <div className="text-secondary text-center">
                Non sei ancora registrato? Registrati!
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
