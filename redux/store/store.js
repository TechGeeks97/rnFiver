import {configureStore} from '@reduxjs/toolkit';
import fullfilment from '../fullfilment/fullfilmentSlice';

export const store = configureStore({
  reducer: {
    fullfilment,
  },
});
