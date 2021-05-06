import React, { useEffect, useState } from "react";
import "./style.scss";
import HeroHeader from "../HeroHeader/HeroHeader";
import { v4 as uuid } from "uuid";
import Switch from "react-switch";
import Modal from "../Modal/Modal";
const Hero = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comics, setComics] = useState(null);
  const [comic, setComic] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showComics, setShowComics] = useState(true);
  const hero = props.data.find((e) => e.name === props.match.params.name);
  const handleChange = (checked) => {
    !checked ? setChecked(true) : setChecked(false);
    checked ? setShowComics(true) : setShowComics(false);
  };
  useEffect(() => {
    if (hero) {
      fetch(
        `${hero.comics.collectionURI}?apikey=be0553adc33cf75595b3888e59c1b2b9`
      )
        .then((data) => data.json())
        .then((data) => setComics(data.data.results));
    }
  }, [hero]);
  return (
    <>
      <HeroHeader />
      {hero ? (
        <div className="heroPage">
          <img
            src={hero.thumbnail.path + "/standard_fantastic.jpg"}
            alt=""
            className="heroImg"
          />
          <div className="heroDescDiv">
            <h1>{hero.name}</h1>
            <p className="heroDesc">
              {hero.description
                ? hero.description
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada ligula vel imperdiet maximus. Proin elementum molestie tellus, pharetra rhoncus orci hendrerit ut. Sed pellentesque pulvinar diam. Vestibulum blandit blandit metus, non egestas tellus molestie ac. Suspendisse ullamcorper, nulla et placerat malesuada, dolor ipsum tincidunt quam, eu congue purus neque quis dui. Sed luctus felis at rhoncus rutrum. Fusce ut dolor placerat, finibus ante non, gravida nulla. Integer at vulputate nisl. Nam vulputate augue a libero vehicula eleifend."}
            </p>
          </div>
          <div className="comicsDiv">
            <div className="switchAndComicDiv">
              <Switch
                onChange={() => handleChange(checked)}
                checked={checked}
              />
              {!showComics ? <h1>Show Comics</h1> : <h1>Hide Comics</h1>}
            </div>
            {comics && showComics
              ? comics.map((e, i) => {
                  if (i < 6)
                    return (
                      <div className="comicDiv" key={uuid()}>
                        <img
                          className="comicPic"
                          src={`${e.thumbnail.path}/portrait_xlarge.${e.thumbnail.extension}`}
                          alt=""
                          onClick={() => {
                            setIsOpen(true);
                            setComic(e);
                          }}
                        />
                        <p className="comicTitle">{e.title}</p>
                        <Modal
                          comic={comic}
                          open={isOpen}
                          setIsOpen={setIsOpen}
                        ></Modal>
                      </div>
                    );
                  else return null;
                })
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
