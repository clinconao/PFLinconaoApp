import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../feactures/shop/shopSlice.js'

export const store = configureStore({
  reducer: {
    shop:shopReducer
  },
})