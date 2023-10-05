import React from "react";

const PlayerSearch = (props) => {
  return (
    <div className="inputBox">
      <input name="playerName" id="playerName" />
      <button onClick={props.handleSearchSummonerClick}>Search Summoner</button>
    </div>
  );
};

export default PlayerSearch;
