import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Jobs from "./components/Jobs/jobs";
import { Box, Container, Grid, Stack } from "@mui/material";
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

import Actions from "./components/Actions/Actions";
import Activity from "./components/Activity/Activity";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Statistic from "./components/Statistic/Statistic";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Order";

function App() {
  return (
    <>
      {/* <Container>
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
      </Container> */}

      <Stack direction="row" justifyContent="space-evenly">
        <Dashboard />
        <Grid container>
          <Grid size={12}>
            <Header />
          </Grid>
          <Grid size={12}>
            <Statistic />
          </Grid>
          <Grid size={8}>
            <Orders />
          </Grid>
          <Grid size={4}>
            <Products />
          </Grid>
          <Grid size={6}>
            <Activity />
          </Grid>
          <Grid size={6}>
            <Actions />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default App;
