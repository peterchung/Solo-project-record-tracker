import React from "react";
import PlayerSearch from "./components/playerSearch.jsx";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";

const App = (props) => {
  const dispatch = useDispatch();
  const nameState = useSelector((state) => state.profile.summonerName);
  const summonerInfoState = useSelector((state) => state.profile.summonerInfo);
  const profilePicURL = 'http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/'

  const handleSearchSummonerClick = async () => {
    // retrieve user input and update nameState to user input
    const inputName = `${document.querySelector("#playerName").value}`;
    // dispatch(actions.searchSummonerAction(inputName));

    // POST request to server to retrieve info from API
    const request = await fetch("/api", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({ name: inputName }),
    });
    const data = await request.json();
    const playerInfo = data.name;

    // update summonerInfoState with data from API
    await dispatch(actions.searchSummonerAction(inputName, playerInfo));
    document.querySelector("#playerName").value = "";
    // console.log("API Data:", summonerInfoState);
  };


  return (
    <div>
      { JSON.stringify(summonerInfoState) !== '{}' ?
        <>
          <img width = '100' height = '100' src={profilePicURL + summonerInfoState.profileIconId + '.png'}></img>
          <p>{summonerInfoState.name}</p>
          <p>{summonerInfoState.summonerLevel}</p>
        </> 
        :
        <>
          <p></p>
        </>
      }
      <PlayerSearch handleSearchSummonerClick={handleSearchSummonerClick} />
    </div>
  );
};

export default App;
