import React from "react";
import navbarImg from "/public/navbar-img.png";

export default function Navbar() {
  return (
    <navbar>
      <div className="navbar-left">
        <img src={navbarImg}></img>
        <p>Meme Generator</p>
      </div>
      <div className="navbar-right">
        <p>React Project - Project 3</p>
      </div>
    </navbar>
  );
}
