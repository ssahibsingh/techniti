import "./App.css";

import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import OurTeam from "./components/OurTeam";
import NavbarN from "./components/NavbarN";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Registration from "./components/Registration";
import ScrollToTop from "./components/ScrollToTop";

import {
  Avishkar,
  BestFromWaste,
  Boltbolt,
  ChemECar,
  ChemEDesign,
  ChemEHunt,
  FashionShow,
  Hackmol,
  IntegrationBee,
  Microrobowar,
  Prayaas,
  RCcars,
  Robohunt,
  Robowar,
  ThreeBHK,
  TrickyCircuits,
  UAVDrone,
} from "./Events";

function App() {
  return (
    <>
      <Router>
        <NavbarN />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/register" element={<Registration />} exact />
            <Route path="/event" element={<Events />} exact />
            <Route path="/team" element={<OurTeam />} exact />
            <Route path="/about" element={<AboutUs />} exact />
            <Route path="/event/avishkar" element={<Avishkar />} exact />
            <Route path="/event/bolt-bolt" element={<Boltbolt />} exact />
            <Route
              path="/event/best-from-waste"
              element={<BestFromWaste />}
              exact
            />
            <Route path="/event/chem-e-car" element={<ChemECar />} exact />
            <Route
              path="/event/chem-e-design"
              element={<ChemEDesign />}
              exact
            />
            <Route path="/event/chem-e-hunt" element={<ChemEHunt />} exact />
            <Route path="/event/fashionshow" element={<FashionShow />} exact />
            <Route path="/event/hackmol" element={<Hackmol />} exact />
            <Route
              path="/event/integratio-bee"
              element={<IntegrationBee />}
              exact
            />
            <Route
              path="/event/microrobowar"
              element={<Microrobowar />}
              exact
            />
            <Route path="/event/prayaas" element={<Prayaas />} exact />
            <Route path="/event/robohunt" element={<Robohunt />} exact />
            <Route path="/event/rccars" element={<RCcars />} exact />
            <Route path="/event/robowar" element={<Robowar />} exact />
            <Route
              path="/event/trickycircuits"
              element={<TrickyCircuits />}
              exact
            />
            <Route path="/event/threebhk" element={<ThreeBHK />} exact />
            <Route path="/event/uavdrone" element={<UAVDrone />} exact />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
