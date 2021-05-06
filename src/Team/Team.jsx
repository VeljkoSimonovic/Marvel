import React, { useContext } from "react";
import "./style.scss";
import { PropContext } from "../App";
import { v4 as uuid } from "uuid";
import deleteIcon from "../imgs/delete.png";
const Team = () => {
  const { team, removeFromTeam } = useContext(PropContext);
  return (
    <div className="teamDiv">
      <h1>My Team</h1>
      {team
        ? team.map((e) => (
            <div className="teamMember" key={uuid()}>
              <div
                className="teamMemberImgDiv"
                onClick={() => removeFromTeam(e)}
              >
                <img
                  src={e.thumbnail.path + "/standard_medium.jpg"}
                  alt="avatar"
                  className="img"
                />
                <img src={deleteIcon} alt="" className="img1" />
              </div>
              <p className="teamMemberName">{e.name}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Team;
