import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ahmed-saad-b9526a205/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ahmed-Saad-J" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
