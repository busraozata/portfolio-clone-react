import React, { useState } from "react";
import "./Nav.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareCheck } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }>
          <AiOutlineHome />
        </a>
        <a href="/#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }>
          <AiOutlineUser />
        </a>
        <a href="/#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }>
          <BiBook />
        </a>
        <a href="/#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }>
          <RiServerLine />
        </a>
        <a href="/#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }>
          <BiMessageSquareCheck />
        </a>
      </nav>
    </div>
  );
}
