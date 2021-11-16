import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Testimonial from "./components/Testimonial";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Amenities />
      <Testimonial />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;