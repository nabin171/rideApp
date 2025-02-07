import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    userSelection:"",
    value: 0,
    gameConfig: {
      userWinningConditions: [
        {
          user: "rock",
          computer: "scissors",
        },
        {
          user: "paper",
          computer: "scissors",
        },
        {
          user: "scissors",
          computer: "rock",
        },
      ],
    },
  },
  reducers: {
    setUserSelection: (state,action) => {

      state.userSelection=action.payload
    },
 
  },
});

export const { setUserSelection } = gameSlice.actions;

export default gameSlice.reducer;
