import React, { useState, useContext, useEffect } from "react";
import { PropContext } from "../App";
import "./style.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const { filterData } = useContext(PropContext);

  useEffect(() => {
    filterData(input);
  }, [input, filterData]);
  return (
    <div className="searchdiv">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
