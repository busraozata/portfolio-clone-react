import React from "react";
import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
export default function Footer() {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="/#">
          <FaFacebookF />
        </a>
        <a href="/#">
          <FiInstagram />
        </a>
        <a href="/#">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR tutorials. All rights reserved</small>
      </div>
    </footer>
  );
}
