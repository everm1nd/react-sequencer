import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Sequencer from "./components/sequencer";

let stepsCount = 8;

const sequencer = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT':
      return state == stepsCount - 1 ? 0 : state + 1;
    default:
      return state;
  }
}

const store = createStore(sequencer);

const render = () => {
  ReactDOM.render(
    <div>
      <Sequencer current={store.getState()} size={stepsCount} />
      <button onClick={
          function(){
            store.dispatch({type:'NEXT'})
          }
        }>NEXT</button>
    </div>,
    document.getElementById('root-container')
  );
}

store.subscribe(render)
render()
