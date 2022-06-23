import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="mailto:ahmedsa39d999@gmail.com">
          <IoMdMailOpen />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
