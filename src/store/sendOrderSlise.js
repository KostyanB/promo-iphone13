import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from '../env.json';

export const sendOrder = createAsyncThunk(
  'sendOrder/sendOrder',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(env.backend.sendOrderUrl, {
        method: 'POST',
      });
      if (!response) throw new Error('Server error');
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const sendOrderSlice = createSlice({
  name: 'sendOrder',
  initialState: {
    mainOrder: '',
    crossOrder: [],
    correctOrder: '',
    status: null,
    error: null,
  },
  reducers: {
    setMainOrder: (state, action) => {
      state.mainOrder = action.payload;
    },
    addCrossGood: (state, action) => {
      state.crossOrder = [...state.cross, action.payload];
    },
  },
  extraReducers: {
    [sendOrder.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [sendOrder.fulfilled]: (state, action) => {
      const data = action.payload;
      state.status = 'success';
      state.correctOrder = data;
    },
    [sendOrder.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { setMainOrder, addCrossGood } = sendOrderSlice.actions;

export const selectMainOrder = state => state.sendOrder.mainOrder;
export const selectCrossOrder = state => state.sendOrder.crossOrder;
export const selectCorrectOrder = state => state.sendOrder.correctOrder;
export const selectError = state => state.goodDb.error;
export const selectStatus = state => state.goodDb.status;

export default sendOrderSlice.reducer;
