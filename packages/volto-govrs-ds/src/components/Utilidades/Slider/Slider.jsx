import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../../theme/Formularios/Slider.scss';

const generateMarks = (min, max, markGap) => {
  const marks = {};
  for (let i = min; i <= max; i += markGap) {
    marks[i] = String(i.toFixed(0));
  }
  if (marks[max] === undefined) {
    marks[max] = String(max.toFixed(0));
  }
  return marks;
};

const CustomSlider = ({
  label,
  value,
  onChange,
  range = false,
  vertical = false,
  markGap,
  snapping = false,
  precision = 0,
  min = 0,
  max = 100,
}) => {
  // Lógica de cálculo do Gap
  const defaultGap = (max - min) / 5;
  const finalMarkGap = markGap && markGap > 0 ? markGap : defaultGap;

  // Lógica de Precision
  const realStepValue = precision > 0 ? 1 / Math.pow(10, precision) : 1;

  // Lógica de Steps e Marks
  const marks = generateMarks(min, max, finalMarkGap);
  const stepForSlider = snapping ? finalMarkGap : realStepValue;

  const handleInputChange = (newVal, index = null) => {
    const numericVal = Number(newVal);

    if (range) {
      const updated = [...value];
      updated[index] = numericVal;
      if (updated[0] > updated[1]) updated.sort((a, b) => a - b);
      onChange(updated);
    } else {
      onChange(numericVal);
    }
  };

  const valStart = range ? value[0] : value;
  const valEnd = range ? value[1] : undefined;

  return (
    <div
      className={`slider-wrapper ${vertical ? 'vertical' : 'horizontal'} 
        ${range ? 'range' : 'single'} 
        ${!snapping ? 'no-dots' : ''}`}
    >
      {label && <label className="slider-label">{label}</label>}

      {vertical && range && (
        <input
          type="number"
          className="slider-input input-range-start"
          value={valStart}
          onChange={(e) => handleInputChange(e.target.value, 0)}
          min={min}
          max={max}
        />
      )}

      <div className="slider-container">
        {!vertical && range && (
          <input
            type="number"
            className="slider-input input-range-start"
            value={valStart}
            onChange={(e) => handleInputChange(e.target.value, 0)}
            min={min}
            max={max}
          />
        )}

        <div className="slider-track-container">
          <Slider
            range={range}
            vertical={vertical}
            min={min}
            max={max}
            value={value}
            step={stepForSlider}
            marks={marks}
            onChange={onChange}
          />
        </div>

        {!vertical && (
          <input
            type="number"
            className={`slider-input input-end-single`}
            value={valEnd !== undefined ? valEnd : valStart}
            onChange={(e) =>
              handleInputChange(e.target.value, range ? 1 : null)
            }
            min={min}
            max={max}
          />
        )}
      </div>

      {vertical && (
        <input
          type="number"
          className={`slider-input input-end-single`}
          value={valEnd !== undefined ? valEnd : valStart}
          onChange={(e) => handleInputChange(e.target.value, range ? 1 : null)}
          min={min}
          max={max}
        />
      )}
    </div>
  );
};

CustomSlider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  range: PropTypes.bool,
  vertical: PropTypes.bool,
  markGap: PropTypes.number,
  snapping: PropTypes.bool,
  precision: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default CustomSlider;
