import { useEffect, useRef, useCallback } from 'react';

import {
  constructAnimationCSSValueProperty,
  injectKeyframeRuleToElement,
  toggleAnimationPlayState
} from '../core';
import { ANIMATION_PLAY_STATE } from '../core/strings';

export const useMotion = (animation = {}) => {
  const ref = useRef();

  const getElement = () => {
    const element = ref.current;
    return element;
  };

  const handleAnimationPlayState = useCallback((state, cb) => {
    const element = getElement();
    if (element) {
      toggleAnimationPlayState(state, cb)(element);
    }
  }, []);

  useEffect(() => {
    const element = getElement();
    const { autoStart } = animation;
    injectKeyframeRuleToElement(animation)(element);
    if (!autoStart) {
      handleAnimationPlayState(ANIMATION_PLAY_STATE.PAUSED);
    }
  }, [animation, handleAnimationPlayState]);

  const play = () => handleAnimationPlayState(ANIMATION_PLAY_STATE.RUNNING);

  const pause = () => handleAnimationPlayState(ANIMATION_PLAY_STATE.PAUSED);

  const stop = () => {
    handleAnimationPlayState(ANIMATION_PLAY_STATE.STOP, (_, element) => {
      /**
       * https://stackoverflow.com/questions/6268508
       * /restart-animation-in-css3-any-better-way-than-removing-the-element
       */
      element.style.animation = 'none';
      // eslint-disable-next-line no-unused-expressions
      element.offsetHeight; // Triggers reflow
      element.style.animation = null;

      // needs to reset to original animation
      element.style.animation = constructAnimationCSSValueProperty(animation);
    });
    handleAnimationPlayState(ANIMATION_PLAY_STATE.PAUSED);
  };

  return {
    controls: {
      play,
      pause,
      stop
    },
    ref
  };
};
