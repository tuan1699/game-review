import { createSelector } from "@reduxjs/toolkit";

export const gamesSelector = (state) => state.games.data;
export const detailSelector = (state) => state.gameDetail.data;
export const filterPlatformSelector = (state) => state.filter.platform;
export const filterGenreSelector = (state) => state.filter.genre;
export const sortSelector = (state) => state.filter.alphaBet;
export const loadingDetailSelector = (state) => state.gameDetail.loading;

export const gamesRemaining = createSelector(
  gamesSelector,
  filterPlatformSelector,
  filterGenreSelector,
  (data, platform, genre) => {
    return data.filter((game) => {
      if (platform === "All" && genre === "All") {
        return game;
      } else if (platform === "All") {
        return game.genre.includes(genre);
      } else if (genre === "All") {
        return game.platform.includes(platform);
      } else {
        return game.genre.includes(genre) && game.platform.includes(platform);
      }
    });
  }
);
