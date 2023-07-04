import React from "react";
import Carousel from "react-bootstrap/Carousel";
import hotel from "../IMAGE/casaovunque.png";
import car from "../IMAGE/carsabri.png";
import bus from "../IMAGE/bus.png";


function CarouselFadeExample() {
  return (
    <Carousel className="w-100 mx-auto mt-5 mb-5 carousel-home" nextIcon={null} prevIcon={null}>
      <Carousel.Item>
      <img className="d-block w-100" src={hotel} alt="First slide" height={'400px'}  />
       
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100" src={car} alt="First slide" height={'400px'}  />
       
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100" src={bus} alt="First slide" height={'400px'}  />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;