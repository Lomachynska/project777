import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const mySlice = createSlice({
  name: 'myData',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = mySlice.actions;
export default mySlice.reducer;
