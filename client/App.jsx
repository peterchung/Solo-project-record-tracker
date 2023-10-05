import React from "react";
import PlayerSearch from "./components/playerSearch.jsx";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";

const App = (props) => {
  const dispatch = useDispatch();
  const nameState = useSelector((state) => state.profile.summonerName);

  const handleSearchSummonerClick = async () => {
    const inputName = `${document.querySelector("#playerName").value}`;
    dispatch(actions.searchSummonerAction(inputName));
    const request = await fetch("/api", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({ name: nameState }),
    });
    const data = request.json();
    console.log("the response from backend:", data);
  };

  return (
    <div>
      <PlayerSearch handleSearchSummonerClick={handleSearchSummonerClick} />
    </div>
  );
};

export default App;
