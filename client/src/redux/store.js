import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducerSlices/gameSlice";
import gameSlice from "./reducerSlices/gameSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    game:gameSlice,
  },
});
