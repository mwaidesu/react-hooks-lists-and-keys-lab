import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techLists = technologies.map((techList) => (
    <span key={techList}>
      {techList}
    </span>
  ))


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techLists}
      </div>
    </div>
  );
}

export default ProjectItem;
