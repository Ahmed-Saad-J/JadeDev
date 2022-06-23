import React from "react";
import "./about.css";
import me from "../../assets/me.jpeg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="my picure" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hello! My name is Ahmed saad. I am an informatics and computer
            science student who specializes in software engineering in the
            Britich university in egypt, I am also a full-stack developer with a
            passion for back-end development, and I always enjoy learning new
            things in my free time.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
