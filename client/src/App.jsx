import React from "react";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/common/Footer";
import Footer from "./components/common/Footer.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;