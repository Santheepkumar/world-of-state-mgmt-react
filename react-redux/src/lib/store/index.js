import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import randomReducer from "../slices/randomSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: { serviceApi },
  //     },
  //   }),
});
