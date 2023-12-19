import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Alert from "./components/Alert/Alert";
import { AuthContext } from "./context/AuthContext";
import CakeGirlSeries from "./pages/CakeGirlSeries/CakeGirlSeries";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Thanks from "./pages/Thanks/Thanks";
import Gallery from "./pages/Gallery/Gallery";
import Terms from "./pages/Legal/Terms";
import Privacy from "./pages/Legal/Privacy";
import Cookies from "./pages/Legal/Cookies";
import Contact from "./pages/Contact/Contact";
import Returns from "./pages/Legal/Returns";

function App() {
  const { openAlert, setOpenAlert, alertMessage, alertStatus } =
    React.useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<CakeGirlSeries />} /> */}
          <Route path="/birthday-girls" element={<CakeGirlSeries />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        <Footer />
      </Router>
      <Alert
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        alertMessage={alertMessage}
        alertStatus={alertStatus}
      />
    </div>
  );
}

export default App;
