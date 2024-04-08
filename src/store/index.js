import { configureStore } from '@reduxjs/toolkit';

import burgersReducer from './slices/burgersSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        burgers: burgersReducer,
        cart: cartSlice,
    },
})