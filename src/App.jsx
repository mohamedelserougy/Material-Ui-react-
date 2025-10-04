import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Jobs from "./components/Jobs/jobs";
import { Box, Container } from "@mui/material";
import Process from "./components/Process/Process";
import Subscribe from "./components/Subscribe/Subscribe";
import Customers from "./components/Customers/Customers";
import Learning from "./components/Learning/Learning";
import Trusted from "./components/Trusted/Trusted";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
import Navbar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Partner from "./components/Partner/Partner";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Partner />
        <About />
        <Process />
        <Customers />
        <Jobs />
        <Stats />
        <Learning />
        <Process />
        <Trusted />
        <Reviews />
        <Subscribe />
        <Footer />
      </Container>
    </>
  );
}

export default App;
