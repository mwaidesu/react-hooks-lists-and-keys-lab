import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let aTag = links.map((link) =>(
    <a key={link} href={"#" + link}>{link}</a>
  ));

  return <nav>{aTag}</nav>;
}

export default NavBar;
