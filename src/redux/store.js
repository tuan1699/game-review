import { configureStore } from "@reduxjs/toolkit";
import gameListSlice from "../components/GameList/GameList.slice";
import { gameDetail } from "../components/GameList/GameList.slice";
import filterSlice from "../components/Filter/Filter.slice";

const store = configureStore({
  reducer: {
    games: gameListSlice.reducer,
    gameDetail: gameDetail.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
