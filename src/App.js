import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import OurTeam from "./components/OurTeam";

import Chemical1 from "./Events/Chemical1";
import Chemical2 from "./Events/Chemical2";
import NavbarN from "./components/NavbarN";

import Prayaas from "./Events/Prayaas";
import Mathematics from "./Events/Mathematics";
import Robohunt from "./Events/Robohunt";
import Microrobowar from "./Events/Microrobowar";
import TrickyCircuits from "./Events/TrickyCircuits";
import ThreeBHK from "./Events/ThreeBHK";
import UAVDrone from "./Events/UAVDrone";
import RCcars from "./Events/RCcars";
import Robowar from "./Events/Robowar";
import Avishkar from "./Events/Avishkar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Boltbolt from "./Events/Boltbolt";
import Registration from "./components/Registration";
import ScrollToTop from "./components/ScrollToTop";
import FashionShow from "./Events/FashionShow";
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
            <Route path="/event/fashionshow" element={<FashionShow />} exact />
            <Route path="/event/chemedesign" element={<Chemical1 />} exact />
            <Route path="/event/chemecar" element={<Chemical2 />} exact />
            <Route path="/event/prayaas" element={<Prayaas />} exact />
            <Route path="/event/maths" element={<Mathematics />} exact />
            <Route path="/event/robohunt" element={<Robohunt />} exact />
            <Route
              path="/event/microrobowar"
              element={<Microrobowar />}
              exact
            />
            <Route
              path="/event/trickycircuits"
              element={<TrickyCircuits />}
              exact
            />
            <Route path="/event/threebhk" element={<ThreeBHK />} exact />
            <Route path="/event/uavdrone" element={<UAVDrone />} exact />
            <Route path="/event/rccars" element={<RCcars />} exact />
            <Route path="/event/robowar" element={<Robowar />} exact />
            <Route path="/event/avishkar" element={<Avishkar />} exact />
            <Route path="/event/boltbolt" element={<Boltbolt />} exact />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
