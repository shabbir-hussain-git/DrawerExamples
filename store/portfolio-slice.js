import { createSlice } from '@reduxjs/toolkit'
import Util from '../Util/Util'
const initialState = {
  value: 0,
  arr:[],
  loading:false,
  threshold:10,
  initial:''
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
    updateInitialState:(state,action)=>{
      state.initial = new Date().getTime();
    }
  },
})

const loadPortfolioData = (state)=>{
  return async (dispatch)=>{
    let toLoad = true;
    if(state.initial){
      // toLoad = false;
      toLoad =  Util.toLoad(state.initial,10);
      
    }else{
      dispatch(updateInitialState());
    }
    if(toLoad){
      dispatch(updateLoading(true));
      const  data =  await Util.getData('services/portfolio/myPortfolio');
      // console.log(data);
      dispatch(updateLoading(false));
    }
  }
}
// Action creators are generated for each case reducer function
export const { incrementByAmount ,updateLoading,updateInitialState} = portfolio.actions
export {
  loadPortfolioData
};
export default portfolio.reducer