import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>GitHub</a>
      <a href={linkedin}>Linked In</a>
    </div>
  );
}

export default Links;
