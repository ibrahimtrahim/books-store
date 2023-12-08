import { Container} from "react-bootstrap";
import BookCard from "../../../components/BookCard";
import './LatestBooks.css';


const LatestBooks = () => {
  return (
    <section className="my-5">
        <Container>
        <h1 className="text-center text-decoration-underline fw-bold mb-5">Latest Books</h1>
        <div className="d-flex flex-wrap justify-content-center flex-lg-row">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        </Container>
    </section>
  )
}

export default LatestBooks