import React from "react";
import formFrame from "/public/form-frame.jpg";

export default function Form() {
  // create a state for meme object first
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomUrl: "http://i.imgflip.com/1bij.jpg",
  });

  // fetch meme images from API
  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  // get random meme image url from api
  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomUrl: url }));
  }

  // add text to image
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <section className="form">
        <input
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Botton text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form-btn" onClick={getMemeImg}>
          Get a new meme image <img src={formFrame}></img>
        </button>
      </section>
      <div className="meme">
        <img src={meme.randomUrl} className="memeImg"></img>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
