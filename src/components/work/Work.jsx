import React from "react";
import "./work.css";
import Project from "./Project";
import Heliotrope from "../../assets/Heliotrope.PNG";
import JadeChat from "../../assets/chat.PNG";

const Work = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container work__container">
        <Project
          img={Heliotrope}
          title="Heliotrope"
          desc="An E-commerce web app for jewellery built with Node, Express, PassportJS, and MongoDB"
          github="https://github.com/Ahmed-Saad-J/heliotrope"
        />
        <Project
          img={JadeChat}
          title="Jade Chat"
          desc="A simple group chat web app built with Node, Express, PassportJS, SocketIO, and MongoDB"
          github="https://github.com/Ahmed-Saad-J/jade-chat"
        />
      </div>
    </section>
  );
};

export default Work;
