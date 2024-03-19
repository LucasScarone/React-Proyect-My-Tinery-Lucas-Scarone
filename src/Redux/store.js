import { configureStore } from '@reduxjs/toolkit'
import cityReducers from "./CityReducer/cityReducers"

const store = {
    cities : cityReducers
}

export default configureStore({
  reducer: store
})