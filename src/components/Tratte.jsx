import React, { useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import newyork from "../IMAGE/ny.jpeg";
import roma from "../IMAGE/roma.jpeg";
import parigi from "../IMAGE/parigi.jpeg";
import tokyo from "../IMAGE/tokyo.jpeg";
import londra from "../IMAGE/londra.jpeg";
import immagine from "../IMAGE/aereo.PNG";
import "react-datepicker/dist/react-datepicker.css";

function ImageAndTextExample() {
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departure, setDeparture] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [baggage, setBaggage] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    function getRandomLetter() {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      return alphabet[randomIndex];
    }

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateTicketNumber() {
      let ticketNumber = "";

      // Genera 3 cifre casuali
      for (let i = 0; i < 3; i++) {
        const randomDigit = getRandomNumber(0, 9);
        ticketNumber += randomDigit;
      }

      // Genera 3 lettere casuali
      for (let i = 0; i < 3; i++) {
        const randomLetter = getRandomLetter();
        ticketNumber += randomLetter;
      }

      return ticketNumber;
    }

    const ticketNumber = generateTicketNumber();
    console.log("Numero biglietto generato:", ticketNumber);

    try {
      const response = await fetch("http://localhost:8080/api/auth/biglietti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "test",
          dataAndata: startDate.toISOString().substring(0, 10),
          dataRitorno: endDate.toISOString().substring(0, 10),
          partenza: departure,
          arrivo: selectedCity,
          bagagli: baggage ? "BAGAGLIO_SI" : "BAGAGLIO_NO",
          numeroBiglietto: ticketNumber,
        }),
      });

      if (response.ok) {
        console.log("Biglietto creato con successo.");
      } else {
        console.log("Errore nella richiesta");
      }
    } catch (error) {
      console.log("Errore nella richiesta:", error);
    }
  };

  const handleModalOpen = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  const handleBaggageChange = (event) => {
    setBaggage(event.target.value === "yes");
  };

  const getCities = () => {
    const cities = ["Roma", "Londra", "Parigi", "Tokyo", "New York"];
    return cities.filter((city) => city !== selectedCity);
  };

  return (
    <>
      <h1 className="text-center mt-5 title fw-bold">
        <div className="image-container">
          <img src={immagine} alt="" width={"75px"} className="air mt-2" />
        </div>
        <span className="caption">LE NOSTRE TRATTE</span>
      </h1>

      <Card
        className="w-75 mx-auto mt-5 tratteCard"
        onClick={() => handleModalOpen("New York")}
      >
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
        </Card.ImgOverlay>
      </Card>
      <br />
      <Card
        className="w-75 mx-auto mt-5 tratteCard"
        onClick={() => handleModalOpen("Roma")}
      >
        <Card.Img
          variant="top"
          src={roma}
          height={"200px"}
          className="rounded-2"
        />
        <Card.ImgOverlay className="image-overlay">
          <Card.Title className="image-text text-light text-center fs-1 mt-5 fw-bold">
            ROMA
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Card
        className="w-75 mx-auto mt-5 tratteCard"
        onClick={() => handleModalOpen("Parigi")}
      >
        <Card.Img
          variant="top"
          src={parigi}
          height={"200px"}
          className="rounded-2"
        />
        <Card.ImgOverlay className="image-overlay">
          <Card.Title className="image-text text-light text-center fs-1 mt-5 fw-bold">
            PARIGI
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Card
        className="w-75 mx-auto mt-5 tratteCard"
        onClick={() => handleModalOpen("Tokyo")}
      >
        <Card.Img
          variant="top"
          src={tokyo}
          height={"200px"}
          className="rounded-2"
        />
        <Card.ImgOverlay className="image-overlay">
          <Card.Title className="image-text text-light text-center fs-1 mt-5 fw-bold">
            TOKYO
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Card
        className="w-75 mx-auto mt-5 mb-5 tratteCard"
        onClick={() => handleModalOpen("Londra")}
      >
        <Card.Img
          variant="top"
          src={londra}
          height={"200px"}
          className="rounded-2"
        />
        <Card.ImgOverlay className="image-overlay">
          <Card.Title className="image-text text-light text-center fs-1 mt-5 fw-bold">
            LONDRA
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prenota un volo per {selectedCity}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Luogo di partenza</Form.Label>
              <Form.Control
                as="select"
                value={departure}
                className="border border-primary rounded-0"
                onChange={handleDepartureChange}
              >
                <option value="">Seleziona luogo di partenza</option>
                {getCities().map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value="test" // Aggiungi qui il valore appropriato per l'username
                className="border border-primary rounded-0"
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data di partenza</Form.Label>
              <br />
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                className="border border-primary rounded-0"
                dateFormat="dd/MM/yyyy"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data di ritorno</Form.Label>
              <br />
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                className="border border-primary rounded-0"
                dateFormat="dd/MM/yyyy"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bagaglio</Form.Label>
              <br />
              <Form.Check
                inline
                label="Si"
                type="radio"
                name="baggage"
                value="yes"
                checked={baggage === true}
                onChange={handleBaggageChange}
              />
              <Form.Check
                inline
                label="No"
                type="radio"
                name="baggage"
                value="no"
                checked={baggage === false}
                onChange={handleBaggageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Prenota
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageAndTextExample;
