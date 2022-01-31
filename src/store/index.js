import { configureStore } from '@reduxjs/toolkit';
import goodReducer from './getGoodDbSlice';
import crossSellReducer from './crossSellSlice';
import sendOrderReducer from './sendOrderSlice';

export default configureStore({
  reducer: {
    goodDb: goodReducer,
    crossSellDb: crossSellReducer,
    order: sendOrderReducer,
  },
});
