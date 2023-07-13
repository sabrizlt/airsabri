import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ilcairo from "../IMAGE/ilcairo.jpeg";
import buenosaires from "../IMAGE/buenos.jpeg";
import dubai from "../IMAGE/dubai.jpeg";
import napoli from "../IMAGE/napoli.jpeg";
import catania from "../IMAGE/catania.jpeg";
import firenze from "../IMAGE/firenze.jpeg";
import milano from "../IMAGE/milano.jpeg";
import praga from "../IMAGE/praga.jpeg";
import budapest from "../IMAGE/budapest.jpeg";
import berlino from "../IMAGE/berlino.jpeg";
import barcellona from "../IMAGE/barcellona.jpeg";
import singapore from "../IMAGE/singapore.jpeg";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {
 

  return (
    <>
      <MyNavbar />

      <h1 className="text-center titleHome ticketTitle fw-bold">
        <span className="caption">AGGIORNAMENTI</span>
      </h1>

      <h2 className="mx-5 titleHome ticketTitle fw-bold">Piu Italia entro il 2025</h2>

      <div className="d-flex justify-content-center tratte-future">
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={napoli} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Napoli</Card.Title>
          <Card.Text>
          Un viaggio a Napoli ti condurrà in un incantevole labirinto di strade tortuose, ricche di storia e di vivaci colori. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={catania} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Catania</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={firenze} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Firenze</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={milano} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Milano</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <h2 className="mx-5 titleHome ticketTitle fw-bold">Prepara le vacanze europee</h2>

      <div className="d-flex justify-content-center tratte-future">
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={praga} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Praga</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={budapest} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Budapest</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={berlino} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Berlino</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={barcellona} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Barcellona</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <h2 className="mx-5 titleHome ticketTitle fw-bold">Mai stati così internazionali</h2>

      <div className="d-flex justify-content-center tratte-future">
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={dubai} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Dubai</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={buenosaires} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Buenos Aires</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={singapore} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Singapore</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img variant="top" src={ilcairo} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center">Il Cairo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
      <MyFooter />
    </>
  );
}

export default BasicExample;
