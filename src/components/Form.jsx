import React from "react";
import formFrame from "/public/form-frame.jpg";

export default function Form() {
  return (
    <section className="form">
      <input placeholder="Top text"></input>
      <input placeholder="Botton text"></input>
      <button className="form-btn">
        Get a new meme image <img src={formFrame}></img>
      </button>
    </section>
  );
}
