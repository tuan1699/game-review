import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    platform: "All",
    genre: "All",
    alphaBet: "",
  },
  reducers: {
    platformFilterChange: (state, action) => {
      state.platform = action.payload;
      console.log(action.payload);
    },

    genreFilterChange: (state, action) => {
      state.genre = action.payload;
      console.log(action.payload);
    },

    // alphaBetFilterChange: (state, action) => {
    //   state.alphaBet = action.payload;
    //   console.log(action.payload);
    // },
  },
});

export default filterSlice;
export const { platformFilterChange, genreFilterChange } = filterSlice.actions;
