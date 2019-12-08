# Welcome to motion-x 👋

> Control your element's animation declaratively using JavaScript 

## Install

Using via Vanilla JavaScript:
```sh
npm install @tinker-hub/motion-core
```

[![npm version](https://badge.fury.io/js/%40tinker-hub%2Fmotion-core.svg)](https://badge.fury.io/js/%40tinker-hub%2Fmotion-core)


Using via React:
```sh
npm install @tinker-hub/use-motion
```

[![npm version](https://badge.fury.io/js/%40tinker-hub%2Fuse-motion.svg)](https://badge.fury.io/js/%40tinker-hub%2Fuse-motion)

## Usage

🚀 Codesandbox [demo](https://codesandbox.io/s/tinker-hubuse-motion-nov06).

Basic usage using React:

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

## API

- `@tinker-hub/motion-core` API is available [here](https://github.com/tinker-hub/motion-x/tree/master/packages/motion-core).
- `@tinker-hub/use-motion` API is available [here](https://github.com/tinker-hub/motion-x/tree/master/packages/use-motion).


## Author

👤 **Tinker-hub**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/tinker-hub/motion-x/issues). 

## Show your support

Give a ⭐️ if this project helped you!