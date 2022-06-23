import React from "react";
import "./Services.scss";
import { BiCheck } from "react-icons/bi";
export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <div className="service__head">
                <h3>UI/UX Design</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <div className="service__head">
                <h3>Web Development</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <div className="service__head">
                <h3>Content Creating</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
                <li>
                  <BiCheck />
                  <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
