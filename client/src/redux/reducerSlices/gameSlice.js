import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    userSelection: "",
    gameConfig: {
      userWinningConditions: [
        {
          user: "rock",
          computer: "scissors",
        },
        {
          user: "paper",
          computer: "rock",
        },
        {
          user: "scissors",
          computer: "paper",
        },
      ],
    },
    selectionOptions: ["rock", "paper", "scissor"],
  },
  reducers: {
    setUserSelection: (state, action) => {
      state.userSelection = action.payload;
    },
  },
});

export const { setUserSelection } = gameSlice.actions;

export default gameSlice.reducer;
