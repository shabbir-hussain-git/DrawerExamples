import { configureStore } from '@reduxjs/toolkit'
import PortfolioSlice from './portfolio-slice';

export const store = configureStore({
  reducer: {
    'portfolioSlice':PortfolioSlice
  },
})