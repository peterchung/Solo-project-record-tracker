import React from "react";
import PlayerSearch from "./components/playerSearch.jsx";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";
import './styles.css';
import CHALLENGER from "./images/CHALLENGER2.png";


// line chart stuff
// import { line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale, // x axis
//   LinearScale, //y axis
//   PointElement
// } from 'chart.js'

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// )



const App = (props) => {
  const dispatch = useDispatch();
  const nameState = useSelector((state) => state.profile.summonerName);
  const summonerInfoState = useSelector((state) => state.profile.summonerInfo);
  const statInfoState = useSelector((state) => state.profile.statsInfo);
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
    const statsInfo = data.rank;
    console.log(statsInfo)
    console.log(playerInfo)

    // update summonerInfoState with data from API
    await dispatch(actions.searchSummonerAction(inputName, playerInfo, statsInfo));
    document.querySelector("#playerName").value = "";
  
  };

  // console.log("API Data:", summonerInfoState);

  return (
    <div id='body'>
      
      { JSON.stringify(summonerInfoState) !== '{}' ?
        <div>
          <div className="infopics">
            <img width = '200' height = '100' src={CHALLENGER} />
          </div>
          <div className="infopics">
            <img width = '100' height = '100' src={ profilePicURL + summonerInfoState.profileIconId + '.png' }></img>
          </div>
          <div id='basicinfo'>
            <p>Summoner Name: <span className="name">{summonerInfoState.name}</span>  Summoner Level: <span className="level">{summonerInfoState.summonerLevel}</span> </p>
          </div>  
        </div> 
        :
        <>
          <p></p>
        </>
      }
      <PlayerSearch handleSearchSummonerClick={handleSearchSummonerClick} />
      { JSON.stringify(summonerInfoState) !== '{}' ?
        <div id='stats'>
            <p>Wins: <span className="statsheet">{statInfoState[0].wins}</span></p>
            <p>Losses: <span className="statsheet">{statInfoState[0].losses}</span></p> 
            <p>Games Played: <span className="statsheet">{(statInfoState[0].wins + statInfoState[0].losses)}</span></p>
            <p> Win Percentage: <span className="statsheet">{((statInfoState[0].wins / (statInfoState[0].wins + statInfoState[0].losses)) * 100).toFixed(2)+'%'}</span></p>
        </div>
        :
        <>
          <p></p>
        </>
      }

    </div>
  );
};

export default App;
