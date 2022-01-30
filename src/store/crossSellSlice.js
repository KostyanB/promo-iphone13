import { createSlice } from '@reduxjs/toolkit';
import env from '../env.json';
import { getGoodDb } from './goodSlice';

const {
  stepForShowCrossSell,
  initialStates: { initCrossSellCount },
} = env;

const getGoodForShow = (arr, count) => arr.slice(0, count);

export const crossSellSlice = createSlice({
  name: 'crossSellDb',
  initialState: {
    crossSellDb: null,
    crossSell: null,
    goodForShow: null,
    countStack: initCrossSellCount,
  },
  reducers: {
    addGoodsToShow: state => {
      const count = state.countStack + stepForShowCrossSell;
      state.countStack = count;
      state.goodForShow = getGoodForShow(state.crossSellDb, count);
    },
  },
  extraReducers: {
    [getGoodDb.fulfilled]: (state, action) => {
      const data = action.payload['cross-sell'];
      state.crossSellDb = data;
      state.goodForShow = getGoodForShow(data, state.countStack);

      state.crossSell = data.reduce((acc, item) => {
        acc[item['id']] = item;
        return acc;
      }, {});
    },
  },
});

export const { addGoodsToShow } = crossSellSlice.actions;

export const selectCrossSellDb = state => state.crossSellDb.crossSellDb;
export const selectCrossSell = state => state.crossSellDb.crossSell;
export const selectGoodForShow = state => state.crossSellDb.goodForShow;
export const selectCountStack = state => state.crossSellDb.countStack;

export default crossSellSlice.reducer;
