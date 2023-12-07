import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/HomePage/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
