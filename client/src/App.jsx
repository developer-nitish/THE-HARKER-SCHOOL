import React from "react";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Home />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;