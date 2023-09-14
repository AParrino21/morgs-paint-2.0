import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Alert from "./components/Alert/Alert";
import { AuthContext } from "./context/AuthContext";
import CakeGirlSeries from "./pages/CakeGirlSeries/CakeGirlSeries";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";

function App() {
  const { openAlert, setOpenAlert, alertMessage, alertStatus } =
    React.useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/happy-birthday" element={<CakeGirlSeries />} />
          <Route path="/cart" element={<Cart />} />
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
