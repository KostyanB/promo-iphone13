import { createSlice } from '@reduxjs/toolkit';
import env from '../env.json';
import { getGoodDb } from './goodSlice';

const { initGoodForShow } = env.initialStates;

const getGoodForShow = (arr, count) => arr.slice(0, count);

export const crossSellSlice = createSlice({
  name: 'crossSellDb',
  initialState: {
    crossSellDb: null,
    crossSell: null,
    goodForShow: null,
    goodCount: initGoodForShow,
  },
  reducers: {
    setGoodForShow: (state, action) => {},
    addGoodsToShow: state => {
      state.goodCount = state.goodCount + initGoodForShow;
      state.goodForShow = getGoodForShow(state.crossSellDb, state.goodCount);
    },
  },
  extraReducers: {
    [getGoodDb.fulfilled]: (state, action) => {
      const data = action.payload['cross-sell'];
      state.crossSellDb = data;
      state.goodForShow = getGoodForShow(data, state.goodCount);

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
export const selectGoodCount = state => state.crossSellDb.goodCount;

export default crossSellSlice.reducer;
