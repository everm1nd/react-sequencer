import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Sequencer from "./components/sequencer";

let stepsCount = 16;

const sequencer = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT':
      return state == stepsCount - 1 ? 0 : state + 1;
    default:
      return state;
  }
}

const store = createStore(sequencer);

let tick = {}

const start = () => {
  tick = setInterval(function(){
    store.dispatch({type:'NEXT'})
  },250)
}

const stop = () => {
  clearInterval(tick)
}

const render = () => {
  ReactDOM.render(
    <div>
      <Sequencer current={store.getState()} size={stepsCount} />
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
    </div>,
    document.getElementById('root-container')
  );
}

store.subscribe(render)
render()
