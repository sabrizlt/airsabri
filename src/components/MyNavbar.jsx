import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from '../IMAGE/LOGOAIR.PNG'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';



function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg" className='navbar fixed-top'>
      <Container>
        <div className="d-flex align-items-center">
        <Navbar.Brand as={Link} to="/Home">
        <img src={LogoImage} width="80px" alt="" />
      </Navbar.Brand>
          <Navbar.Text className='textLogo fs-2 fw-bold text-decoration-none'>AIR SABRI</Navbar.Text>
        </div>
        <div className="ms-auto">
          <Button variant="light" onClick={handleShow}>
            <AiOutlineMenu className='fs-2 fw-bold text-primary'/>
          </Button>
        </div>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        <Offcanvas.Title className='offcanvas-title fs-1 text-center mt-5'>PREFERITI</Offcanvas.Title>
        <Offcanvas.Title className='offcanvas-title fs-1 text-center'>I MIEI VIAGGI</Offcanvas.Title>
        <Offcanvas.Title className='offcanvas-title fs-1 text-center'>OFFERTE</Offcanvas.Title>
        <Offcanvas.Title className='offcanvas-title fs-1 text-center'>AGGIORNAMENTI</Offcanvas.Title>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Offcanvas.Title className='offcanvas-title fs-4'><Link to={'/login-page'} className='text-light text-decoration-none'>LOGIN</Link></Offcanvas.Title>
        <Offcanvas.Title className='offcanvas-title fs-4'><Link to={'/register-page'} className='text-light text-decoration-none'>REGISTER</Link></Offcanvas.Title>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Example;
