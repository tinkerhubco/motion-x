# `@tinker-hub/motion-core`

> A set of utilities that provides a declarative way to control the animation of the given element.

## Usage

TODO

## API

### <a id="of"></a> `constructAnimationCSSValueProperty(animation)`
- Argument:
  - `animation` an **optional** object that will define the animation. See more about [animation](#animation) object.
- Return: String

### <a id="of"></a> `constructKeyframeCSSRule(animation)`
- Argument:
  - `animation` an object that will define the animation. See more about [animation](#animation) object.
- Return: String

### <a id="of"></a> `injectKeyframeRuleToElement(animation)(element)`
- Argument:
  - `animation` an object that will define the animation. See more about [animation](#animation) object.
  - `element` an HTML element
- Return: String

### <a id="of"></a> `toggleAnimationPlayState(state, cb)`
- Argument:
  - `state` a string of state to apply to the HTML element. See more about [state](#state).
  - `cb` is a callback function for custom behaviours.
- Return: Void

### animation

An `animation` object will be the one defining how an element will animate. It is based from the [style object properties](https://www.w3schools.com/jsref/dom_obj_style.asp).

- Supported style object properties
  - [animationName](https://www.w3schools.com/jsref/prop_style_animationname.asp)
  - [animationIterationCount](https://www.w3schools.com/jsref/prop_style_animationiterationcount.asp)
  - [animationDuration](https://www.w3schools.com/jsref/prop_style_animationduration.asp)
  - [animationTimingFunction](https://www.w3schools.com/jsref/prop_style_animationtimingfunction.asp)
  - [CSS @keyframes Rule](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
    - When defining a keyframe rule, you don't need to add the `@keyframes <name> {}` part.

### state

State is an animation play state that will be apply to an HTML element. 

- Supported animation play states
  - `running`
  - `paused`
  - `stop`