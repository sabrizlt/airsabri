import React from "react";
import Card from "react-bootstrap/Card";
import copertina from "../IMAGE/Blue Cream Film Photography Collage Summer Zine.png";
import pagina2 from "../IMAGE/pagina 2.png";
import pagina3 from "../IMAGE/pagina3.png";
import pagina4 from "../IMAGE/pagina4.png";
import pagina5 from "../IMAGE/pagina5.png";
import pagina6 from "../IMAGE/pagina6.png";
import pagina7 from "../IMAGE/pagina7.png";
import pagina8 from "../IMAGE/pagina8.png";

function BasicExample() {
  return (
    <>
     <h1 className="text-center mt-5 titleHome fw-bold">
              <span className="caption">RIVISTA DI BORDO</span>
            </h1>
    <div className="d-flex justify-content-center tratte-future">
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={copertina} className="rounded-0" />
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina2} className="rounded-0" />
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina3} className="rounded-0" />
      </Card>
    </div>
    <div className="d-flex justify-content-center tratte-future">
    <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina4} className="rounded-0" />
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina5} className="rounded-0" />
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina6} className="rounded-0" />
      </Card>
    </div>
    <div className="d-flex justify-content-center tratte-future">
    <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina7} className="rounded-0" />
      </Card>

      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={pagina8} className="rounded-0" />
      </Card>


      <Card
        style={{
          width: "18rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, .6)",
          border: "none",
        }}
        className="m-5 rounded-0"
      >
        <Card.Img src={copertina} className="rounded-0" />
      </Card>
    </div>
    </>
  );
}

export default BasicExample;
