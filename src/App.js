import Header from "./components/Layouts/Header/Header";
import React from "react";
import Nav from "./components/Layouts/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Testimonials from "./components/Testimonials/Testimonials";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layouts/Footer/Footer";
import Services from "./components/Services/Services";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
