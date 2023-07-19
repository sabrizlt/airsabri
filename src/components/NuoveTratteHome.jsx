import React from "react";
import Card from "react-bootstrap/Card";
import ilcairo from "../IMAGE/ilcairo.jpeg";
import buenosaires from "../IMAGE/buenos.jpeg";
import dubai from "../IMAGE/dubai.jpeg";

function BasicExample() {
  return (
    <div className="d-flex justify-content-center tratte-future">
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0 aggiornamento"
      >
        <Card.Img variant="top" src={dubai} className="rounded-0" style={{height: '200px'}}/>
        <Card.Body>
          <Card.Title className="text-center ">Dubai</Card.Title>
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
        className="m-5 rounded-0  aggiornamento"
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
        className="m-5 rounded-0 aggiornamento"
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
  );
}

export default BasicExample;
