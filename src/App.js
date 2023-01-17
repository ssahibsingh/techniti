import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import OurTeam from "./components/OurTeam";
import About from "./components/About";
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
function App() {
  return (
    <>
      <Router>
        <NavbarN />

        <Routes>
          <Route path="/events" element={<Events />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/team" element={<OurTeam />} exact />
          <Route path="/about" element={<About />} exact />
          {/* events */}
          <Route path="/chemedesign" element={<Chemical1 />} exact />
          <Route path="/chemecar" element={<Chemical2 />} exact />
          <Route path="/prayaas" element={<Prayaas />} exact />
          <Route path="/maths" element={<Mathematics />} exact />
          <Route path="/robohunt" element={<Robohunt />} exact />
          <Route path="/microrobowar" element={<Microrobowar />} exact />
          <Route path="/trickycircuits" element={<TrickyCircuits />} exact />
          <Route path="/threebhk" element={<ThreeBHK />} exact />
          <Route path="/uavdrone" element={<UAVDrone />} exact />
          <Route path="/rccars" element={<RCcars />} exact />
          <Route path="/robowar" element={<Robowar />} exact />
          <Route path="/avishkar" element={<Avishkar />} exact />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
