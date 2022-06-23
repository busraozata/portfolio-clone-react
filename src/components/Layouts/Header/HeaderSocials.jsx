import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
export default function HeaderSocials() {
  return (
    <div className="header__socials d-flex flex-column align-items-center">
      <a href="/#" target="_blank">
        <GrLinkedinOption />
      </a>
      <a href="/#" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}
