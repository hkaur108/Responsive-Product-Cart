import { configureStore } from '@reduxjs/toolkit';
import orderSlice  from './OrderConfirmedSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
      cart:cartSlice,
      product:productSlice,
      order:orderSlice
    },
  })
  
  export type AppStore = typeof store
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch