// update file path and name
import * as types from "../constants/actionTypes";

const initialState = {
  summonerName: "",
  summonerInfo: {},
  statsInfo: {},
};

const profileReducer = (state = initialState, action) => {
  let summonerName;
  let summonerInfo;
  let statsInfo;

  switch (action.type) {
    case types.SEARCH_SUMMONER: {
      summonerName = action.payload1;
      summonerInfo = action.payload2;
      statsInfo = action.payload3;
      return {
        ...state,
        summonerName,
        summonerInfo,
        statsInfo,
      };
    }
    default: {
      return state;
    }
  }
};
export default profileReducer;
