import React from 'react'
import "./about.css"
import me from "../../assets/me.jpeg"
const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h1>About Me</h1>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={me} alt="my picure" />
        </div>
      </div>
      <div className="about__content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia rem soluta quaerat reiciendis asperiores nulla veritatis animi? Ea quod exercitationem necessitatibus delectus nobis a doloribus quos eaque, tempore inventore.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
    )
}

export default About