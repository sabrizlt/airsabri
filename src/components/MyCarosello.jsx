import Carousel from "react-bootstrap/Carousel";
import parigi from "../IMAGE/parigi.jpeg";
import booking from "../IMAGE/booking.png";
import car from "../IMAGE/CAR.jpeg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={booking} alt="First slide" height={'100px'} />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={car} alt="First slide" height={'100px'} />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={parigi} alt="First slide" height={'100px'} />


        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
