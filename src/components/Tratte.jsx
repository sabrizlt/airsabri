import React, { useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/price", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departure: departure,
          destination: "New York",
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Prezzo dei biglietti Roma-New York:", data.price);
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

  return (
    <>
      <h1 className="text-center mt-5 title fw-bold">
        <div class="image-container">
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
          <Form>
            <Form.Group>
              <Form.Label>Luogo di partenza</Form.Label>
              <Form.Control
                as="select"
                value={departure}
                className="border border-primary rounded-0"
                onChange={handleDepartureChange}
              >
                <option value="">Seleziona luogo di partenza</option>
                <option value="Roma">Roma</option>
                <option value="Londra">Londra</option>
                <option value="Parigi">Parigi</option>
                <option value="Tokyo">Tokyo</option>
              </Form.Control>
            </Form.Group>

            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Data di partenza"
              className="mt-3 border border-primary"
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="Data di ritorno"
              minDate={startDate}
              className="mt-3 border border-primary mx-4"
            />

            <Button variant="primary" className="mt-3" type="submit">
              Conferma
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageAndTextExample;
