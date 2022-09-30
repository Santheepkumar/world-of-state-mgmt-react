import { createSlice } from "@reduxjs/toolkit";

export const randomSlice = createSlice({
  name: "random",
  initialState: {
    value: 0,
    randomTotal: null,
  },
  reducers: {
    change: (state) => {
      state.value = Math.random();
      state.randomTotal = state.value
        .toString()
        .split("")
        .reduce((a, b) => {
          if (b === ".") {
            return 0 + Number(a);
          }
          return Number(a) + Number(b);
        }, 0);
    },
  },
});

export const { change } = randomSlice.actions;
export default randomSlice.reducer;
