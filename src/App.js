import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";

import {toggleAdd, toggleMinus, toggleAddASync, toggleMinusAsync} from "./store/actions"

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const add = () => {
    dispatch(toggleAdd())
  };

  const minus = () =>{
    dispatch(toggleMinus())
  };

  const addAsync = () => {
    dispatch(toggleAddASync())
  };

  const minusAsync = () => {
    dispatch(toggleMinusAsync());
  };

  return (
      <div className="App">
        <span>{counter}</span>
        <button onClick={add} >+</button>
        <button onClick={minus}>-</button>
        <button onClick={addAsync}>Async + </button>
        <button onClick={minusAsync}>Async - </button>
      </div>
  );
}

export default App;
