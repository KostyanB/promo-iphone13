import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGoodDb = createAsyncThunk(
  'goodDb/getGoodDb',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('../db/db.json');
      if (!response) throw new Error('Server error');
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const goodSlice = createSlice({
  name: 'goodDb',
  initialState: {
    goodDb: {},
    status: null,
    error: null,
    present: {},
    card: {},
    characteristics: {},
    crossSell: [],
  },
  extraReducers: {
    [getGoodDb.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [getGoodDb.fulfilled]: (state, action) => {
      const data = action.payload;
      state.status = 'success';
      state.goodDb = data;
      state.present = data.present;
      state.card = data.card;
      state.characteristics = data.characteristics;

      state.crossSell = data['cross-sell'].reduce((acc, item) => {
        acc[item['id']] = item;
        return acc;
      }, {});
    },
    [getGoodDb.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const selectGoodDb = state => state.goodDb.goodDb;
export const selectPresent = state => state.goodDb.present;
export const selectCard = state => state.goodDb.card;
export const selectCharacteristics = state => state.goodDb.characteristics;
export const selectCcrossSell = state => state.goodDb.ccrossSell;

export const selectError = state => state.goodDb.error;
export const selectStatus = state => state.goodDb.status;

export default goodSlice.reducer;
