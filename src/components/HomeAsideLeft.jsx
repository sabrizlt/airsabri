// HomeAsideLeft.js
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";



function HomeAsideLeft() {
  const alertClicked = () => {
    alert("Il tuo codice sconto è: YSH234");
  };
  return (
    <>
    <div className="d-none d-lg-block col-lg-3">
      <ListGroup
        defaultActiveKey="#link1"
        style={{ width: "14rem", position: "sticky", top: 80 }}
        className="m-5 rounded-0 list-home"
        border="light"
      >
         <ListGroup.Item className="text-center fw-bold">
            INFO
          </ListGroup.Item>
        <ListGroup.Item action href="#link1">
          Profilo
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Prenota un volo
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Rivista di bordo
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          Codice Sconto
        </ListGroup.Item>
      </ListGroup>
      <Carousel fade style={{ width: "14rem", position: "sticky", top: 335 }} className='m-5 rounded-0 list-home'>
      <Carousel.Item>
        <div className="video-container video-container-no-controls">
          <iframe
            src="https://youtu.be/h3fUgOKFMNU"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="video-container video-container-no-controls">
          <iframe
            src="https://www.youtube.com/embed/oSexfR0Ubzw?autoplay=1&mute=1&start=0.13"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="video-container video-container-no-controls">
          <iframe
            src="https://www.youtube.com/embed/X8zLJlU_-60?autoplay=1&mute=1"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
    
  );
}

export default HomeAsideLeft;