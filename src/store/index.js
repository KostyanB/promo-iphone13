import { configureStore } from '@reduxjs/toolkit';
import goodReducer from './goodSlice';

export default configureStore({
  reducer: {
    goodDb: goodReducer,
  },
});
