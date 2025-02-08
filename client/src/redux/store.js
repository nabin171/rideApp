import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducerSlices/counterSlice";
import gameSlice from "./reducerSlices/gameSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    game: gameSlice,
  },
});
