import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <>
      <MyNavbar />

      <h1 className="text-center titleHome ticketTitle fw-bold">
        <span className="caption">OFFERTE</span>
      </h1>

      <Accordion defaultActiveKey="0" className="mt-5 w-75 mx-auto lista-offerte">
        <Accordion.Item eventKey="0" className="offerte">
          <Accordion.Header>CODICE SCONTO</Accordion.Header>
          <Accordion.Body className="offerte">
            Registrati su Air Sabri e inserisci il codice sconto "AIRSABRI10" durante l'acquisto del tuo primo volo per ricevere uno sconto del 10%. Questa promozione è valida per tutto il 2023 e si applica solo al primo volo effettuato dopo la registrazione.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="offerte mt-5">
          <Accordion.Header>VACANZE DI PRIMAVERA</Accordion.Header>
          <Accordion.Body className="offerte">
            Approfitta della nostra offerta speciale per le vacanze di primavera. Se prenoti un volo tra il 10 marzo 2024 e il 30 marzo 2024, avrai diritto a uno sconto del 20% sul prezzo del biglietto. Questa promozione è valida solo per le prenotazioni effettuate entro il 31 dicembre 2024.
          </Accordion.Body>
        </Accordion.Item>
        
      </Accordion>

      <div className="fixed-bottom">
        <MyFooter />
      </div>
    </>
  );
}

export default BasicExample;
