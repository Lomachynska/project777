// src/components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/mySlice'; // правильний шлях до слайсу

function Counter() {
  const count = useSelector((state) => state.myData.value); // доступ до стану Redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
