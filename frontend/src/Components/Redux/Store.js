import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/UserSlice'
import contentReducer from './Slices/ContentSlice'

export const Store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer
  },
})