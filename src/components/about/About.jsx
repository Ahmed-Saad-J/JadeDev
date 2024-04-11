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
          Hey there! I'm Ahmed Saad, a software developer passionate about crafting robust solutions.
           Having graduated with a specialization in software engineering from the London South Bank University, I have a year of industry experience. My journey started as an informatics and computer science student,
           evolving into a full-fledged software developer. And I can't wait for my next evolution!  {" "}
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
