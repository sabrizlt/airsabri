import React from 'react';
import Card from 'react-bootstrap/Card';
import dubai from "../IMAGE/dubai.jpeg";

function BasicExample() {
  return (
      <Card style={{ width: '10rem' }} className='m-5 rounded-0'>
        <Card.Img variant="top" src={dubai} />
        <Card.Body>
          <Card.Title className='text-center'>Dubai</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

     
  );
}

export default BasicExample;
