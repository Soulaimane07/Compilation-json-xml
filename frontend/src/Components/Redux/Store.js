import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/UserSlice'

export const Store = configureStore({
  reducer: {
    user: userReducer
  },
})