// update file path and name
import * as types from "../constants/actionTypes";

const initialState = {
  summonerName: "",
};

const profileReducer = (state = initialState, action) => {
  let summonerName;

  switch (action.type) {
    case types.SEARCH_SUMMONER: {
      summonerName = action.payload;
      return {
        ...state,
        summonerName,
      };
    }
    default: {
      return state;
    }
  }
};
export default profileReducer;
