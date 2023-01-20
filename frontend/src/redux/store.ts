// Please note that this gist follows the repo available at: https://github.com/delasign/react-redux-tutorial
import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import reducer from "./slice";

const store = configureStore({
  reducer: {
    app: reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
