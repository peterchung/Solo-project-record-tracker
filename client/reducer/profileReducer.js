// update file path and name
import * as types from "../constants/actionTypes";

const initialState = {
  summonerName: "",
  summonerInfo: {},
};

const profileReducer = (state = initialState, action) => {
  let summonerName;
  let summonerInfo;

  switch (action.type) {
    case types.SEARCH_SUMMONER: {
      summonerName = action.payload1;
      summonerInfo = action.payload2;
      return {
        ...state,
        summonerName,
        summonerInfo,
      };
    }
    default: {
      return state;
    }
  }
};
export default profileReducer;
