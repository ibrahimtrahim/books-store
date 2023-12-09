import React from 'react';
import {FaStar, FaQuoteLeft} from 'react-icons/fa';
import {
    Col,
    Container,
    Row,
  } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="d-flex justify-content-center">
        <Col md="10" xl="8" className="text-center">
          <h2 className="text-center text-decoration-underline fw-bold mb-5">Testimonials</h2>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="/assets/images/pic-2.png"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt='client1'
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3">
            <FaQuoteLeft />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
            <div className="d-flex flex-row justify-content-center mt-1 text-danger mt-sm-0">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </Col>
        <Col md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="/assets/images/pic-4.png"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt='client2'
            />
          </div>
          <h5 className="mb-3">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3">
            <FaQuoteLeft />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
          <div className="d-flex flex-row justify-content-center mt-1 text-danger mt-sm-0">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </Col>
        <Col md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="/assets/images/pic-3.png"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt='client3'
            />
          </div>
          <h5 className="mb-3">John Smith</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3">
            <FaQuoteLeft />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
          <div className="d-flex flex-row justify-content-center mt-1 text-danger mt-sm-0">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials