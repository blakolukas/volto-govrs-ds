import React, { useState, useEffect } from 'react';
import StepHorizontal from './stepHorizontal';
import StepVertical from './stepVertical';

const Step = ({
  orientation = 'horizontal',
  steps = [],
  activeIndex: controlledIndex,
  onStepClick,
  labelPosition = 'below',
  ...props
}) => {
  const Component = orientation === 'vertical' ? StepVertical : StepHorizontal;

  const getInitial = () => {
    const idx = steps.findIndex((s) => s && s.active);
    return idx >= 0 ? idx : 0;
  };

  const [internalIndex, setInternalIndex] = useState(() => getInitial());

  useEffect(() => {
    if (typeof controlledIndex === 'number') setInternalIndex(controlledIndex);
  }, [controlledIndex]);

  const handleStepClick = (e, step, idx) => {
    if (typeof controlledIndex !== 'number') {
      setInternalIndex(idx);
    }
    if (typeof onStepClick === 'function') onStepClick(e, step, idx);
  };

  const passedSteps = steps.map((s, i) => {
    const originalOnClick = s && s.onClick;
    const stepCopy = { ...s, active: i === internalIndex };

    stepCopy.onClick = (e) => {
      if (typeof originalOnClick === 'function') {
        originalOnClick(e, s, i);
      }
      if (e && e.defaultPrevented) return;
      handleStepClick(e, s, i);
    };

    return stepCopy;
  });

  return (
    <Component steps={passedSteps} labelPosition={labelPosition} {...props} />
  );
};

export default Step;
