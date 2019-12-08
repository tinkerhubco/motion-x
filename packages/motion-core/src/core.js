import { ANIMATION_PLAY_STATE } from './strings';

const toggleAnimationPlayState = (state, cb) => element => {
  const availableStates = [
    ANIMATION_PLAY_STATE.RUNNING,
    ANIMATION_PLAY_STATE.PAUSED,
    ANIMATION_PLAY_STATE.STOP
  ];
  if (availableStates.includes(state) && element) {
    if (cb && typeof cb === 'function') {
      return cb(state, element);
    }
    element.style.WebkitAnimationPlayState = state;
  }
};

const constructAnimationCSSValueProperty = animation => {
  const {
    animationIterationCount,
    animationDuration,
    animationTimingFunction,
    animationName = `motion-css-${Date.now()}`
  } = animation;

  return [
    animationName,
    animationIterationCount,
    animationDuration,
    animationTimingFunction
  ].join(' ');
};

const constructKeyframeCSSRule = animation => {
  const { animationName, keyframes } = animation;
  return `
      @keyframes ${animationName} {
        ${keyframes}
      }
    `;
};

const injectKeyframeRuleToElement = animation => element => {
  if (element) {
    const styleElement = document.querySelector('style');
    const keyframeRule = constructKeyframeCSSRule(animation);
    styleElement.sheet.insertRule(keyframeRule, 0);
    element.style.animation = constructAnimationCSSValueProperty(animation);
  }
};

export {
  constructAnimationCSSValueProperty,
  constructKeyframeCSSRule,
  injectKeyframeRuleToElement,
  toggleAnimationPlayState
};
