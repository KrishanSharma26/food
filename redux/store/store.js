import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import getAuthUserSlicerReducer from '../slicer/getAuthUserSlicer';
const allReducers = combineReducers({
  //add your reducer/slice here
  getAuthUserSlicerReducer,
});

export const store = () =>
  configureStore({
    reducer: allReducers,
  });
export const wrapper = createWrapper(store);
