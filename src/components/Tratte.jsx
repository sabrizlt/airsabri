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
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departure, setDeparture] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [baggage, setBaggage] = useState(false);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState(null);
  const [cvv, setCVV] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [postoNumber, setPostoNumber] = useState("");
  const cities = ["New York", "Tokyo", "Roma", "Londra", "Parigi"];
 const cityPrices = {
  ROMA: {
    PARIGI: 300,
    LONDRA: 100,
    TOKYO: 1300,
    "NEW YORK": 850,
  },
  PARIGI: {
    LONDRA: 200,
    TOKYO: 1400,
    "NEW YORK": 900,
    ROMA: 350,
  },
  LONDRA: {
    ROMA: 100,
    PARIGI: 180,
    TOKYO: 1200,
    "NEW YORK": 750,
  },
  TOKYO: {
    ROMA: 1300,
    PARIGI: 1400,
    LONDRA: 1200,
    "NEW YORK": 1600,
  },
  "NEW YORK": {
    ROMA: 850,
    PARIGI: 900,
    LONDRA: 750,
    TOKYO: 1600,
  },
};


  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleBaggageChange = (event) => {
    setBaggage(event.target.value === "yes");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const generatePostoNumber = () => {
      const randomDigit = getRandomNumber(1, 180);
      return `A${randomDigit}`;
    };

    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateTicketNumber = () => {
      let ticketNumber = "";

      // Genera 3 cifre casuali
      for (let i = 0; i < 3; i++) {
        const randomDigit = getRandomNumber(0, 9);
        ticketNumber += randomDigit;
      }

      // Genera 3 lettere casuali
      for (let i = 0; i < 3; i++) {
        const randomIndex = getRandomNumber(0, 25);
        const randomLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[randomIndex];
        ticketNumber += randomLetter;
      }

      return ticketNumber;
    };

    const ticket = {
      startDate: startDate.toISOString().substring(0, 10),
      endDate: endDate.toISOString().substring(0, 10),
      departure,
      selectedCity,
      baggage,
      ticketNumber: generateTicketNumber(),
      postoNumber: generatePostoNumber(),
    };

    setTicketNumber(ticket.ticketNumber);
    setPostoNumber(ticket.postoNumber);
    setShowModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/biglietti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "szaltni",
          dataAndata: startDate.toISOString().substring(0, 10),
          dataRitorno: endDate.toISOString().substring(0, 10),
          partenza: departure,
          arrivo: selectedCity,
          bagagli: baggage ? "BAGAGLIO_SI" : "BAGAGLIO_NO",
          numeroBiglietto: ticketNumber,
          numeroPosto: postoNumber,
        }),
      });

      if (response.ok) {
        const formattedDeparture = departure.toUpperCase().replace(/\s+/g, "_");
        const formattedDestination = selectedCity
          .toUpperCase()
          .replace(/\s+/g, "_");

        const price = cityPrices[formattedDestination][formattedDeparture];

        console.log(
          "Biglietto inserito nel database con successo. Prezzo: " + price
        );
        alert(
          "Biglietto acquistato con successo. Numero Biglietto: " +
            ticketNumber +
            ", Prezzo: " +
            price
        );
        setCardHolder("");
        setCardNumber("");
        setExpirationDate(null);
        setCVV("");
        setTicketNumber("");
        setPostoNumber("");
        setShowPaymentModal(false);
      } else {
        console.log("Errore durante l'inserimento del biglietto nel database.");
        alert("Errore durante l'acquisto del biglietto.");
      }
    } catch (error) {
      console.log("Errore durante la creazione del biglietto:", error);
      alert("Errore durante la creazione del biglietto.");
    }
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
        onClick={() => {
          setSelectedCity("NEW YORK");
          setShowModal(true);
        }}
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
        onClick={() => {
          setSelectedCity("ROMA");
          setShowModal(true);
        }}
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
        onClick={() => {
          setSelectedCity("PARIGI");
          setShowModal(true);
        }}
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
        onClick={() => {
          setSelectedCity("TOKYO");
          setShowModal(true);
        }}
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
        onClick={() => {
          setSelectedCity("LONDRA");
          setShowModal(true);
        }}
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
                {cities
                  .filter((city) => city !== departure)
                  .map((city) => (
                    <option key={city} value={city}>
                      {city} -{" "}
                      {
                        cityPrices[selectedCity.toUpperCase()][
                          city.toUpperCase()
                        ]
                      }
                      €
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value=""
                className="border border-primary rounded-0"
                disabled
              />
            </Form.Group>
            <div className="d-flex mt-2">
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
              <Form.Group className="mx-5">
                <Form.Label>Data di ritorno</Form.Label>
                <br />
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  className="border border-primary rounded-0"
                  dateFormat="dd/MM/yyyy"
                />
              </Form.Group>
            </div>
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

      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Effettua il pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePaymentSubmit}>
            <Form.Group controlId="formCardHolder">
              <Form.Label>Intestatario della carta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome dell'intestatario"
                value={cardHolder}
                onChange={(event) => setCardHolder(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCardNumber">
              <Form.Label>Numero di carta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il numero di carta"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formExpirationDate">
              <Form.Label>Data di scadenza</Form.Label>
              <DatePicker
                selected={expirationDate}
                onChange={(date) => setExpirationDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formCVV">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il codice di sicurezza"
                value={cvv}
                onChange={(event) => setCVV(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Paga
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageAndTextExample;
