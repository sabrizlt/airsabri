import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import "react-datepicker/dist/react-datepicker.css";
import newyork from "../IMAGE/ny.jpeg";
import roma from "../IMAGE/roma.jpeg";
import parigi from "../IMAGE/parigi.jpeg";
import tokyo from "../IMAGE/tokyo.jpeg";
import londra from "../IMAGE/londra.jpeg";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    fetchTicketData();
  }, []);

  const fetchTicketData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/biglietti");
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

      <h1 className="text-center mt-5 titleHome fw-bold">
        <span className="caption">RIVISTA DI BORDO</span>
      </h1>

      <div>
        <Card className="w-75 mx-auto mt-5 tratteCard" onClick={() => {}}>
          <Card.Img
            variant="top"
            src={newyork}
            height={"200px"}
            className="rounded-2"
          />
          <Card.ImgOverlay className="image-overlay">
            <Card.Title className="image-text text-light text-center fs-1 mt-5 fw-bold">
              NEW YORK
            </Card.Title>
            {ticketData && (
              <div>
                <p className="text-light">Data di partenza: {ticketData.dataPartenza}</p>
                <p className="text-light">Destinazione: {ticketData.destinazione}</p>
                {/* Aggiungi qui gli altri dati del biglietto */}
              </div>
            )}
          </Card.ImgOverlay>
        </Card>
      </div>
      <MyFooter />
    </>
  );
}

export default BasicExample;
