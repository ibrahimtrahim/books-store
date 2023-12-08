import {Link} from 'react-router-dom';
import {FaStar, FaPlus} from 'react-icons/fa';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'react-bootstrap';
const BookCard = (product) => {
    return (
      <Container style={{ maxWidth: "384px" }}>
      <Row className="justify-content-center">
        <Col>
          <Card className='shadow' style={{ borderRadius: "15px" }}>
            <div
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <img
                src="/assets/images/1.jpg"
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <Link to="#!">
                <div className="mask"></div>
              </Link>
            </div>
            <CardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <Link to="#!" className="text-dark">
                      Dell Xtreme 270
                    </Link>
                  </p>
                  <p className="small text-muted">Laptops</p>
                </div>
                
              </div>
            </CardBody>
            <hr class="my-0" />
            <CardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <Link to="#!" className="text-dark">
                    $3,999
                  </Link>
                </p>
                <p className="small text-muted">Rated 4.0/5</p>
              </div>
              <p className="small text-muted">VISA Platinum</p>
            </CardBody>
            <hr class="my-0" />
            <CardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                  <div className="d-flex flex-row justify-content-end mt-1 text-danger mt-sm-0">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                <button className='btn px-4 py-2 bg-primary text-white mt-3 mt-sm-0'>Add To Cart <FaPlus /></button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    );
}

export default BookCard