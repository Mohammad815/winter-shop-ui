import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/slices/winterSlice'

 const store = configureStore({
  reducer: {
      products: productReducer,
  },
});
export default store