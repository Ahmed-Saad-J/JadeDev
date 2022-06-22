import React from 'react'
import "./experience.css"
import Technology from"./Technology"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Qualifies Me </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__education">
        <h3>Education</h3>
        <div className="education__content">
        <h4 className='bold'>Informatics And Computer Science</h4>
        <h5>the British university in Egypt</h5>
        <small className='text-light'>09/2019 - Present</small>
        </div>
        </div>
        <div className="experience__work">
        <h3>Work</h3>
        <div className="education__content">
        <h4 className='bold'>Intern Back End Developer</h4>
        <h5>Jukiyo</h5>
        <small className='text-light'>Aug 2021 - Nov 2021</small>
        </div>
        </div>
        <div className="experience__technologies">
        <h3>Technologies I Worked With</h3>
        <div className="technologies__content">
          <Technology name="NodeJs" />
          <Technology name="Express" />
          <Technology name="Django" />
          <Technology name="MySql" />
          <Technology name="MongoDB" />
          <Technology name="Css" />
          <Technology name="Sass" />
          <Technology name="ReactJS" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience