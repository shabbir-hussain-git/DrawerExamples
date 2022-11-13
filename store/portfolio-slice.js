import { createSlice } from '@reduxjs/toolkit'
import Util from '../Util/Util'
const initialState = {
  value: 0,
  arr:[],
  loading:false,
  mutate : false,
}

export const portfolio = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.value += action.payload
    },
    updateLoading:(state,action)=>{
      state.loading = action.payload;
    },
    mutateData:(state,action)=>{
      state.mutate = true;
    },
    unMutate:(state,action)=>{
      state.mutate = false;
    }
  },
})

const loadPortfolioData = (state)=>{
  return async (dispatch)=>{
    let toLoad = (!state.loading) && Util.toLoadData(state);
    if(toLoad){
      state.loading = true;
      state.count = state.count + 1;
      state.name = state.name + " - "+state.count;
      console.log(state);
      console.log('--------Loading Started ---------')
      dispatch(updateLoading(true));
      const  data =  await Util.getData('services/portfolio/myPortfolio');
      // console.log(data);
      dispatch(updateLoading(false));
      state.loading = false;
      console.log('--------Loading End ---------')
    }
  }
}
// Action creators are generated for each case reducer function
export const { incrementByAmount ,updateLoading,mutateData,unMutate} = portfolio.actions
export {
  loadPortfolioData
};
export default portfolio.reducer