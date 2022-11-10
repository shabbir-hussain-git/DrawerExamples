import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  arr:[]
}

export const portfolio = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = portfolio.actions

export default portfolio.reducer