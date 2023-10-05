import * as types from "../constants/actionTypes";

export const searchSummonerAction = (summonerName) => ({
  type: types.SEARCH_SUMMONER,
  payload: summonerName,
});
