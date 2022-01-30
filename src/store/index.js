import { configureStore } from '@reduxjs/toolkit';
import goodReducer from './goodSlice';
import crossSellReducer from './crossSellSlice';

export default configureStore({
  reducer: {
    goodDb: goodReducer,
    crossSellDb: crossSellReducer,
  },
});
