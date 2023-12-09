import { Container} from "react-bootstrap";
import BookCard from "../../../components/BookCard";
import { Link } from "react-router-dom";
import './LatestBooks.css';


const LatestBooks = () => {
  return (
    <section className="my-5">
        <Container>
        <h2 className="text-center text-decoration-underline fw-bold mb-5">Our Books</h2>
        <div className="d-flex flex-wrap justify-content-center flex-lg-row">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <Link to="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0 buttonCTA ">See More</Link>
        </div>
        </Container>
    </section>
  )
}

export default LatestBooks