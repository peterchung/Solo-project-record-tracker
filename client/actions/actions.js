import * as types from "../constants/actionTypes";

export const searchSummonerAction = (summonerName, summonerInfo, statsInfo) => ({
  type: types.SEARCH_SUMMONER,
  payload1: summonerName,
  payload2: summonerInfo,
  payload3: statsInfo,
});

// export const storeInfoAction = (summonerInfo) => ({
//   type: types.STORE_INFO,
//   payload: summonerInfo,
// });
