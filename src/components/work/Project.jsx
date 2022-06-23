import React from "react";

const Project = (props) => {
  return (
    <article className="work__item">
      <div className="work__item-image">
        <img src={props.img} alt={`${props.title} Screen Shot`} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <a href={props.github} className="btn" target="_blank">
        GitHub
      </a>
    </article>
  );
};

export default Project;
