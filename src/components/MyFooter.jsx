import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="footer bg-primary pt-4 pb-2">
      <Container>
       
            {/* <h4 className=' text-light'>Informazioni di contatto</h4>
            <p className=' text-light'>Indirizzo: Via Example 123, Città, Stato</p>
            <p className=' text-light'>Email: info@example.com</p>
            <p className=' text-light'> Telefono: +1 123-456-7890</p> */}
         
      </Container>
      <div className="footer-bottom">
        <Container>
          <p className="text-center text-light">© {new Date().getFullYear()} Air Sabri. Tutti i diritti riservati.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
