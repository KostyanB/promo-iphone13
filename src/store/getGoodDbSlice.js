import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from '../env.json';

export const getGoodDb = createAsyncThunk(
  'goodDb/getGoodDb',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(env.backend.getGoodUrl);
      if (!response) throw new Error('Server error');
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getGoodDbSlice = createSlice({
  name: 'goodDb',
  initialState: {
    goodDb: null,
    status: null,
    error: null,
    present: null,
    card: null,
    characteristics: null,
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

export const selectError = state => state.goodDb.error;
export const selectStatus = state => state.goodDb.status;

export default getGoodDbSlice.reducer;
