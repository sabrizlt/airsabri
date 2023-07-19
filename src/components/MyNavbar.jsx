import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from '../IMAGE/LOGOAIR.PNG'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";





function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className='navbar fixed-top'>
      <Container>
        <div className="d-flex align-items-center">
        <Navbar.Brand as={Link} to="/Home">
        <img src={LogoImage} width="80px" alt="" />
      </Navbar.Brand>
          <Navbar.Text className='textLogo fs-2 fw-bold text-decoration-none text-light'>AIR SABRI</Navbar.Text>
        </div>
        <div className="ms-auto">
          <Button variant="primary" onClick={handleShow}>
            <AiOutlineMenu className='fs-2 fw-bold text-light'/>
          </Button>
        </div>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement='end' className='canvas'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        
        <Offcanvas.Body >
        <Link to={'/Preferiti'} className='text-decoration-none'><Offcanvas.Title className='offcanvas-title fs-1 text-center mt-5'>PREFERITI</Offcanvas.Title></Link>
        <Link to={'/Viaggi'} className='text-decoration-none'><Offcanvas.Title className='offcanvas-title fs-1 text-center'>I MIEI VIAGGI</Offcanvas.Title></Link>
        <Link to={'/Offerte'} className='text-decoration-none'><Offcanvas.Title className='offcanvas-title fs-1 text-center'>OFFERTE</Offcanvas.Title></Link>
        <Link to={'/Aggiornamenti'} className='text-decoration-none'><Offcanvas.Title className='offcanvas-title fs-1 text-center'>AGGIORNAMENTI</Offcanvas.Title></Link>
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
        <br />
        <Offcanvas.Title className='offcanvas-title fs-4'><Link to={'/login-page'} className='text-light text-decoration-none'><FiLogOut className='me-3 mb-1 fs-3'/>LOG OUT</Link></Offcanvas.Title>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Example;
