import React from "react";
import "./Header.scss";
import CTA from "./CTA";
import ME from "../../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header className="d-flex flex-column align-items-center justify-content-center w-100">
      <div className="container">
        <h5>Hello I'm</h5>
        <h1>Hajita Bintu</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me d-flex justify-content-center align-items-center">
          <div className="img-wrapper">
            <img src={ME} alt="me" />
          </div>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
