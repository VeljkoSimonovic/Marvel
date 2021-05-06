import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./Footer/Footer";
import Heroes from "./Heroes/Heroes";
import Hero from "./Hero/Hero";
import { Route, Switch } from "react-router-dom";
export const PropContext = React.createContext();

function App() {
  const [data, setData] = useState([{ name: "", thumbnail: { path: "" } }]);
  const [filteredData, setfilteredData] = useState([
    { name: "", thumbnail: { path: "" } },
  ]);
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem("team")));
  useEffect(() => {
    fetch(
      "http://gateway.marvel.com/v1/public/characters?apikey=be0553adc33cf75595b3888e59c1b2b9"
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data.data.results);
        setfilteredData(data.data.results);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const addToTeam = (hero) => {
    if (!team) setTeam([hero]);
    else if (!team.some((e) => e.id === hero.id)) setTeam([...team, hero]);
  };

  const removeFromTeam = (hero) => {
    setTeam(team.filter((e) => e.id !== hero.id));
  };

  const filterData = (input) => {
    setfilteredData(
      data.filter((e) => e.name.toLowerCase().includes(input.toLowerCase()))
    );
  };

  return (
    <>
      <PropContext.Provider
        value={{ filteredData, filterData, team, addToTeam, removeFromTeam }}
      >
        <Switch>
          <Route path="/" exact component={Heroes} />
          <Route
            path="/hero/:name"
            exact
            render={(routeInfo) => <Hero {...routeInfo} data={data} />}
          />
        </Switch>
        <Footer />
      </PropContext.Provider>
    </>
  );
}

export default App;
