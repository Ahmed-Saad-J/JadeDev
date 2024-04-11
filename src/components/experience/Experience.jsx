import React from "react";
import "./experience.css";
import Technology from "./Technology";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Qualifies Me </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__education">
          <h3>Education</h3>
          <div className="education__content">
            <h4 className="bold">London South Bank University</h4>
            <h5>Bachelor of Science in informatics and computer science<br/> Major: software engineering</h5>
            <small className="text-light">09/2019 - 07/2023</small>
          </div>
        </div>
        <div className="experience__work">
          <h3>Work</h3>
          <div className="education__content">
            <h4 className="bold">Back End Developer</h4>
            <h5>Jukiyo</h5>
            <small className="text-light">Aug 2021 - Nov 2021</small>
          </div>
        </div>
        <div className="experience__work">
          <h3>Work</h3>
          <div className="education__content">
            <h4 className="bold">Software Developer</h4>
            <h5>Right Group</h5>
            <small className="text-light">July 2023 - Present</small>
          </div>
        </div>
        <div className="experience__technologies">
          <h3>Technologies I Worked With</h3>
          <div className="technologies__content">
            <Technology name=".Net Core" />
            <Technology name="NodeJS" />
            <Technology name="Django" />
            <Technology name="SQL" />
            <Technology name="NoSQL" />
            <Technology name="Sass" />
            <Technology name="Angular" />
            <Technology name="React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
