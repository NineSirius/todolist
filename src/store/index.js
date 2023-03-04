import { configureStore } from '@reduxjs/toolkit'
import listReducer from './reducers/list.reducer'

const store = configureStore({ reducer: listReducer })

export default store
