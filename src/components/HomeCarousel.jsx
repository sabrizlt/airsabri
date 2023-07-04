import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade className="w-100 mx-auto mt-5 mb-5 carousel-home" nextIcon={null} prevIcon={null}>
      <Carousel.Item>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/UfEiKK-iX70?autoplay=1&mute=1&start=0.5"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>

        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
          <h1>Parigi</h1>
          <p>Vieni a scoprire la città dell'amore</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/oSexfR0Ubzw?autoplay=1&mute=1&start=0.13"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <Carousel.Caption>
          <h1>Roma</h1>
          <p>Cibo, musica e cultura nella capitale</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/X8zLJlU_-60?autoplay=1&mute=1"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <Carousel.Caption>
          <h1>Londra</h1>
          <p>La meta alla quale non puoi rinunciare</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
