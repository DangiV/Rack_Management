
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import adminSlice from '../Feature/UserSlice'


const reducer = combineReducers({
  auth: adminSlice,
});

const Store = configureStore({ reducer });

export default Store;
