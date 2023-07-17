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
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const priceBaggage = 20;
  const [discountApplied, setDiscountApplied] = useState(false);

  //mese 2 uguale marzo perche partono da 0
  const discountStartDate = new Date(2024, 2, 10);
  const discountEndDate = new Date(2024, 2, 30);
  const cities = ["NewYork", "Tokyo", "Roma", "Londra", "Parigi"];
  const cityPrices = {
    ROMA: {
      PARIGI: 300,
      LONDRA: 100,
      TOKYO: 1300,
      NEWYORK: 850,
    },
    PARIGI: {
      LONDRA: 200,
      TOKYO: 1400,
      NEWYORK: 900,
      ROMA: 350,
    },
    LONDRA: {
      ROMA: 100,
      PARIGI: 180,
      TOKYO: 1200,
      NEWYORK: 750,
    },
    TOKYO: {
      ROMA: 1300,
      PARIGI: 1400,
      LONDRA: 1200,
      NEWYORK: 1600,
    },
    NEWYORK: {
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
    const loggedInUsername = localStorage.getItem("username");

    try {
      const discountCode = "AIRSABRI10"; // Discount code to be applied
      const isDiscountCodeValid =
        discountApplied ||
        (loggedInUsername && loggedInUsername === discountCode);

      const response = await fetch("http://localhost:8080/api/auth/biglietti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: loggedInUsername, // Use the logged-in username
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

        const basePrice = cityPrices[formattedDestination][formattedDeparture];
        const totalPrice = baggage ? basePrice + priceBaggage : basePrice;

        console.log(
          "Biglietto inserito nel database con successo. Prezzo: " + totalPrice
        );

        try {
          const basePrice =
            cityPrices[formattedDestination][formattedDeparture];
          const totalPrice = baggage ? basePrice + priceBaggage : basePrice;
          // Calcola la data di inizio e fine del viaggio come oggetti Date
          const tripStartDate = new Date(
            startDate.toISOString().substring(0, 10)
          );
          const tripEndDate = new Date(endDate.toISOString().substring(0, 10));

          if (isDiscountCodeValid) {
            // Apply the discount of 10%
            totalPrice = totalPrice * 0.9;
            toast.info("Discount Applied! New price: €" + totalPrice);
          } else {
            toast.info("No discount applied. Price: €" + totalPrice);
          }
          // Verifica se la data di inizio del viaggio è compresa nel periodo di sconto
          if (
            tripStartDate >= discountStartDate &&
            tripStartDate <= discountEndDate
          ) {
            // Applica lo sconto del 20%
            const discountedPrice = totalPrice * 0.8;
            console.log("Prezzo scontato: " + discountedPrice);
            toast.info(
              "Numero Biglietto: " +
                ticketNumber +
                "Prezzo scontato: €" +
                discountedPrice
            );
          } else {
            console.log("Prezzo: " + totalPrice);
            toast.info(
              "Numero Biglietto: " + ticketNumber + " Prezzo: € " + totalPrice
            );
          }
        } catch (error) {
          alert("Questa promo è terminata");
        }
        toast.success("Biglietto acquistato con successo.");

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
          setSelectedCity("NEWYORK");
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
            NEWYORK
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

      <Modal
        show={showModal}
        onHide={handleModalClose}
        className="modale-prenotazione"
        centered
      >
        <Modal.Header closeButton className="corpo-modale rounded-0">
          <Modal.Title className="text-primary mx-5 fs-4 text-center mx-auto">
            Prenota un volo per <br /> {selectedCity}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="corpo-modale">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold fs-5">
                PARTENZA
              </Form.Label>
              <Form.Control
                as="select"
                value={departure}
                className="form-modale"
                onChange={handleDepartureChange}
              >
                <option value="">Seleziona il luogo di partenza</option>
                {cities
                  .filter((city) => city !== selectedCity) 
                  .map((city) => {
                    const formattedSelectedCity = selectedCity
                      .toUpperCase()
                      .replace(/\s+/g, "");
                    const formattedCity = city
                      .toUpperCase()
                      .replace(/\s+/g, "");
                    const price =
                      formattedSelectedCity &&
                      formattedCity &&
                      cityPrices[formattedSelectedCity] &&
                      cityPrices[formattedSelectedCity][formattedCity];

                    if (price) {
                      return (
                        <option key={city} value={city}>
                          {city} - {price}€
                        </option>
                      );
                    } else {
                      return null; // Nascondi la città senza prezzo
                    }
                  })}
              </Form.Control>
            </Form.Group>
            <div className="d-flex mt-2">
              <Form.Group>
                <Form.Label className="text-primary fw-bold fs-5">
                  ANDATA
                </Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  className="form-modale"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 364)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </Form.Group>
              <Form.Group className="mx-3">
                <Form.Label className="text-primary fw-bold fs-5">
                  RITORNO
                </Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  className="form-modale"
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate ? addDays(startDate, 3) : undefined}
                  maxDate={addDays(new Date(), 365)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  disabled={!startDate}
                />
              </Form.Group>
            </div>
            <Form.Group className="mt-3">
              <Form.Label className="text-primary fw-bold fs-5">
                BAGAGLIO
              </Form.Label>
              <span className="mx-2 text-secondary">(+ €20)</span>
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

            <Button variant="primary" type="submit" className="mt-3 w-100">
              Prenota
            </Button>
            <Button variant="success" type="submit" className="mt-3 w-100">
              Preferiti
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        className="modale-prenotazione"
        centered
      >
        <Modal.Header closeButton className="corpo-modale rounded-0">
          <Modal.Title className="text-primary mx-5 fs-4 text-center mx-auto">
            Effettua il pagamento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="corpo-modale rounded-0">
          <Form onSubmit={handlePaymentSubmit}>
            <Form.Group controlId="formCardHolder">
              <Form.Label className="text-primary fw-bold fs-5">
                Intestatario della carta
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome dell'intestatario"
                value={cardHolder}
                onChange={(event) => setCardHolder(event.target.value)}
                className="form-modale rounded-0"
              />
            </Form.Group>

            <Form.Group controlId="formCardNumber">
              <Form.Label className="text-primary fw-bold fs-5 mt-3">
                Numero di carta
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il numero di carta"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
                className="form-modale rounded-0"
              />
            </Form.Group>
            <div className="d-flex align-items-center">
              <Form.Group controlId="formExpirationDate">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Form.Label
                    style={{ marginBottom: "0.5rem" }}
                    className="text-primary fw-bold fs-5 mt-3"
                  >
                    Data di scadenza
                  </Form.Label>
                  <div>
                    <DatePicker
                      selected={expirationDate}
                      onChange={(date) => setExpirationDate(date)}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      className="form-modale data-scadenza"
                    />
                  </div>
                </div>
              </Form.Group>

              <Form.Group controlId="formCVV">
                <Form.Label className="text-primary fw-bold fs-5 mt-3">
                  CVV
                </Form.Label>
                <Form.Control
                  className="mx-1 form-modale rounded-0"
                  type="text"
                  placeholder="Inserisci il CVV"
                  value={cvv}
                  onChange={(event) => setCVV(event.target.value)}
                />
              </Form.Group>
            </div>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Paga
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageAndTextExample;
