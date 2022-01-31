import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from '../env.json';

const { sendOrderUrl } = env.backend;

const initStatus = null,
  initError = null,
  initMainGood = '',
  initCrossOrder = {},
  initDelivery = null;

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async function (data, { rejectWithValue }) {
    try {
      const response = await fetch(sendOrderUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'multipart/form-data; boundary=something',
        },
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
  name: 'order',
  initialState: {
    mainGood: initMainGood,
    crossOrder: initCrossOrder,
    delivery: initDelivery,
    status: initStatus,
    error: initError,
  },
  reducers: {
    setMainGood: (state, action) => {
      const { good, delivery } = action.payload;
      state.mainGood = good;
      state.delivery = delivery;
    },
    addCrossGood: (state, action) => {
      const { key, value } = action.payload;
      state.crossOrder[key] = value;
    },
    delCrossGood: (state, action) => {
      delete state.crossOrder[action.payload];
    },
    clearError: state => {
      console.log('clear');
      state.error = initError;
      state.status = initStatus;
    },
    clearOrder: state => {
      state.error = initError;
      state.status = initStatus;
      state.mainGood = initMainGood;
      state.crossOrder = initCrossOrder;
      state.delivery = initDelivery;
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

export const {
  setMainGood,
  addCrossGood,
  delCrossGood,
  setDelivery,
  clearError,
  clearOrder,
} = sendOrderSlice.actions;

export const selectMainGood = state => state.order.mainGood;
export const selectCrossOrder = state => state.order.crossOrder;
export const selectDelivery = state => state.order.delivery;
export const selectError = state => state.order.error;
export const selectStatus = state => state.order.status;

export default sendOrderSlice.reducer;
