import React from "react";
import "./Portfolio.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "/#",
    demo: "/#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "/#",
    demo: "/#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design we apps",
    github: "/#",
    demo: "/#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Charts templates & infographics in Figma",
    github: "/#",
    demo: "/#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "/#",
    demo: "/#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    github: "/#",
    demo: "/#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="row">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <div className="col-lg-4 col-md-6 mb-5" key={id}>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} className="img-fluid" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
