import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ahmed Saad</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="header__email">
          <a href="mailto:ahmed.sa3dj@gmail.com">ahmed.sa3dj@gmail.com</a>
        </div>
      </div>
    </header>
  );
};

export default header;
