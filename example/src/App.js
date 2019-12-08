import React, { useRef, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

import { useMotion } from './@tinker/motion';

function App() {
  const { controls, ref } = useMotion({
    animationIterationCount: 'infinite',
    animationDuration: '3s',
    animationTimingFunction: 'linear',
    animationName: 'myAnimation',
    keyframes: `
      0% {
        transform: rotate(0deg);
        left: 0;
      }
      50% {
        transform: rotate(90deg);
        background-color: blue;
        left: 100px;
      }
      100% {
        transform: rotate(180deg);
        background-color: red;
        left: 0px;
      }
    `
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" ref={ref} />
        {/* <div
          ref={ref}
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            position: 'absolute'
          }}
        ></div> */}
      </header>
      <div>
        <button onClick={() => controls.play()}>Play</button>
        <button onClick={() => controls.pause()}>Pause</button>
        <button onClick={() => controls.stop()}>Stop</button>
      </div>
    </div>
  );
}

export default App;
