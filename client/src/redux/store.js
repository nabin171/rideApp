import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducerSlices/counterSlice";
import gameSlice from "./reducerSlices/gameSlice";
import logger from 'redux-logger'

import userSlice from "./reducerSlices/userSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    game: gameSlice,
    user: userSlice
  },
  middleware: ()=>[logger]
});
