import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import speaker1 from '../assets/img/speaker1.jpg'
import speaker2 from '../assets/img/speaker2.jpg'
import speaker3 from '../assets/img/speaker3.jpg'
import { Button } from 'react-bootstrap';

function Now() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={speaker1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Product School 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className='text-dark fw-bolder fs-5' variant="secondary">Join Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={speaker2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Product School 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button className='text-dark fw-bolder fs-5' variant="secondary">Join Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={speaker3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Product School 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button className='text-dark fw-bolder fs-5' variant="secondary">Join Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Now;