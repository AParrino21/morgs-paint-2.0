import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Alert from "./components/Alert/Alert";
import { AuthContext } from "./context/AuthContext";
import Soon from "./pages/Home/Soon";

function App() {
  const { openAlert, setOpenAlert, alertMessage, alertStatus } =
    React.useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Soon />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
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
