import { createStore, compose } from "redux";
import allReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState') || '')
                       : {}

const store = createStore(allReducer, persistedState ,composeWithDevTools());

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })



export default store;
