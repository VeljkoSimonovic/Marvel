import React, { useContext } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";
import { PropContext } from "../App";
import Team from "../Team/Team";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
const Heroes = (props) => {
  const { filteredData, addToTeam } = useContext(PropContext);
  return (
    <>
      <Header />
      <div className="articlesDiv">
        <div className="heroesDiv">
          {filteredData.map((e) => (
            <div className="heroDiv" key={uuid()}>
              <p className="heroName">{e.name}</p>
              <img
                src={e.thumbnail.path + "/portrait_uncanny.jpg"}
                alt="avatar"
              />
              <div className="buttonDiv">
                <Link
                  to={{ pathname: `/hero/${e.name}` }}
                  style={{ textDecoration: "none" }}
                >
                  <button>Info</button>
                </Link>

                <button
                  onClick={() => {
                    addToTeam(e);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
        <Team />
      </div>
    </>
  );
};

export default Heroes;
