import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaPaperPlane, FaPenAlt, FaUser, FaRocket, FaHome, FaBoxOpen} from 'react-icons/fa';

const Faq = () => {
  return (
    <Container>
      <section className='my-5'>
        <h2 className="text-center pb-2 text-decoration-underline fw-bold mb-5" >
          FAQ
        </h2>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <Row>
          <Col md="6" lg="4" className="mb-4">
            <div tag="h6" className="mb-3 text-primary">
            <span className='pen-alt text-primary pe-2'><FaPaperPlane /></span> A simple
              question?
            </div>
            <p>
              <strong>
                <u>Absolutely!</u>
              </strong>{" "}
              We work with top payment companies which guarantees your safety
              and security. All billing information is stored on our payment
              processing partner.
            </p>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <div tag="h6" className="mb-3 text-primary">
              <span className='pen-alt text-primary pe-2'><FaPenAlt /></span> A question that
              is longer then the previous one?
            </div>
            <p>
              <strong>
                <u>Yes, it is possible!</u>
              </strong>{" "}
              You can cancel your subscription anytime in your account. Once the
              subscription is cancelled, you will not be charged next month.
            </p>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <div tag="h6" className="mb-3 text-primary">
            <span className='pen-alt text-primary pe-2'><FaUser /></span> A simple question?
            </div>
            <p>
              Currently, we only offer monthly subscription. You can upgrade or
              cancel your monthly account at any time with no further
              obligation.
            </p>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <div tag="h6" className="mb-3 text-primary">
            <span className='pen-alt text-primary pe-2'><FaRocket /></span> A simple question?
            </div>
            <p>
              Yes. Go to the billing section of your dashboard and update your
              payment information.
            </p>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <div tag="h6" className="mb-3 text-primary">
            <span className='pen-alt text-primary pe-2'><FaHome /></span> A simple question?
            </div>
            <p>
              <strong>
                <u>Unfortunately no</u>.
              </strong>{" "}
              We do not issue full or partial refunds for any reason.
            </p>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <div tag="h6" className="mb-3 text-primary">
            <span className='pen-alt text-primary pe-2'><FaBoxOpen /></span> Another
              question that is longer than usual
            </div>
            <p>
              Of course! We’re happy to offer a free plan to anyone who wants to
              try our service.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default Faq