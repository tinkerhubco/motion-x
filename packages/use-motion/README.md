# `@tinker-hub/use-motion`

> A React hook that provides a declarative way to control the animation of the given element.

## Usage

Basic usage:

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

### <a id="of"></a> `useMotion(animation)`
- Argument:
  - `animation` an **optional** object that will define the animation. See more about [animation](#animation) object.
- Return: [motionObject](#motionObject)

### animation

An `animation` object will be the one defining how an element will animate. It is based from the [style object properties](https://www.w3schools.com/jsref/dom_obj_style.asp).

- Supported style object properties
  - [animationName](https://www.w3schools.com/jsref/prop_style_animationname.asp)
  - [animationIterationCount](https://www.w3schools.com/jsref/prop_style_animationiterationcount.asp)
  - [animationDuration](https://www.w3schools.com/jsref/prop_style_animationduration.asp)
  - [animationTimingFunction](https://www.w3schools.com/jsref/prop_style_animationtimingfunction.asp)
  - [CSS @keyframes Rule](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
    - When defining a keyframe rule, you don't need to add the `@keyframes <name> {}` part.

### motionObject

A `motionObject` contains a `controls` object and a React `ref`. The `controls` have a `play`, `stop` and `pause` methods that can control your element. The provided React `ref` will be the one link to the element to animate.