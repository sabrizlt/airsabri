import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "../IMAGE/logo.png";

function BasicExample() {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    fetchBigliettiByUsername("test"); // Sostituisci "testprova" con il nome utente desiderato
  }, []);

  const fetchBigliettiByUsername = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/test");
      if (response.ok) {
        const data = await response.json();
        setTicketData(data);
      } else {
        console.log("Errore durante la fetch dei dati del biglietto");
      }
    } catch (error) {
      console.log("Errore durante la fetch dei dati del biglietto:", error);
    }
  };

  return (
    <>
      <MyNavbar />

      <h1 className="text-center titleHome ticketTitle fw-bold">
        <span className="caption">BIGLIETTI</span>
      </h1>

      <div className="d-flex flex-column align-items-center">
        {ticketData &&
          ticketData.map((biglietto) => (
            <ListGroup
              key={biglietto.id}
              className="w-50 mx-auto mt-5 bg-light mb-5 ticket"
              onClick={() => {}}
            >
              <ListGroup.Item className="bg-primary rounded-0">
                <h1 className="ticket-value text-light text-center">
                  AIR SABRI
                </h1>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <div className="ticket-value">
                  <p className="text-dark mx-3">
                    Data di partenza: {biglietto.dataAndata}
                  </p>
                  <p className="text-dark mx-3">
                    Data di ritorno: {biglietto.dataRitorno}
                  </p>
                </div>
                <div className="mx-3 ticket-value">
                  <p className="text-dark">Partenza: {biglietto.partenza}</p>
                  <p className="text-dark">Destinazione: {biglietto.arrivo}</p>
                </div>
                <img src={logo} alt="" width={"180px"} />
              </ListGroup.Item>
              <ListGroup.Item className=" bg-primary rounded-0">
                <div className="ticket-number ml-auto fw-bold d-flex justify-content-between align-content-center">
                  <p className="text-light">{biglietto.numeroBiglietto}</p>
                  <p className="text-light">{biglietto.numeroPosto}</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
      </div>
      <MyFooter />
    </>
  );
}

export default BasicExample;
