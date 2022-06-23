import React from "react";
import "./About.scss";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="about_image" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about__content">
              <div className="about__cards">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <article className="about__card text-center">
                      <FaAward className="about__icon text-center" />
                      <h5>Experience</h5>
                      <small>3+ Years work</small>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <article className="about__card text-center">
                      <FiUsers className="about__icon" />
                      <h5>Clients</h5>
                      <small>200+ WorldWide</small>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <article className="about__card text-center">
                      <VscFolderActive className="about__icon" />
                      <h5>Projects</h5>
                      <small className="text-center">80+ Years work</small>
                    </article>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
                recusandae, veniam error repellat praesentium similique, minus
                iusto voluptas ipsa ratione dolore beatae reprehenderit omnis
                explicabo nisi culpa! Tempore, quae consequuntur?
              </p>
              <a href="/#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
