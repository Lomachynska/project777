// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import myReducer from './slices/mySlice'; // правильний шлях до редюсера

const rootReducer = combineReducers({
  myData: myReducer, // тут визначаємо частину стану, яка буде управлятися цим редюсером
});

export default rootReducer;
