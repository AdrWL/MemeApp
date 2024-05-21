import { configureStore } from '@reduxjs/toolkit';
import { memeReducer } from './reducers/globalReducer';

const store = configureStore({
  reducer: memeReducer
});

export default store;
