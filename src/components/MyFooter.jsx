import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="footer bg-primary pt-4 pb-2">
      <Container>
       
         
         
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
