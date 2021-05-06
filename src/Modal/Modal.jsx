import React from "react";
import "./style.scss";
import ReactDom from "react-dom";

const Modal = ({ open, setIsOpen, comic }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="backgroundModal" onClick={() => setIsOpen(false)}>
      <div className="modalDiv">
        <img
          src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
          alt=""
          className="comicImg"
        />
        <div className="nameDesc">
          <h3>{comic.title}</h3>
          <p>{comic.description}</p>
          <div className="creatorsCharacters"></div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
