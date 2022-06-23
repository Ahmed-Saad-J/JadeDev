import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ahmed-saad-b9526a205/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="mailto:ahmed.sa3dj@gmail.com">
          <IoMdMailOpen />
        </a>
        <a href="https://github.com/Ahmed-Saad-J" target="_blank">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
