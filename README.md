# Welcome to motion-x 👋

`@tinker-hub/motion-core`

[![npm version](https://badge.fury.io/js/%40tinker-hub%2Fmotion-core.svg)](https://badge.fury.io/js/%40tinker-hub%2Fmotion-core)

`@tinker-hub/use-motion`

[![npm version](https://badge.fury.io/js/%40tinker-hub%2Fuse-motion.svg)](https://badge.fury.io/js/%40tinker-hub%2Fuse-motion)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Control your element's animation using JavaScript

### ✨ [Demo](https://github.com/tinker-hub/motion-x/tree/master/example)

## Install

Using via Vanilla JavaScript:
```sh
npm install @tinker-hub/motion-core
```


Using via React:
```sh
npm install @tinker-hub/use-motion
```

## Usage

Sample usage from React:

```JSX
import { useMotion } from '@tinker-hub/use-motion';

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
        <div
          ref={ref}
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            position: 'absolute'
          }}
        ></div>
      </header>
      <div>
        <button onClick={() => controls.play()}>Play</button>
        <button onClick={() => controls.pause()}>Pause</button>
        <button onClick={() => controls.stop()}>Stop</button>
      </div>
    </div>
  );
}
```


## Run tests

```sh
npm run test
```

## Author

👤 **Tinker-hub**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/tinker-hub/motion-x/issues). 

## Show your support

Give a ⭐️ if this project helped you!