import React from 'react';
import './Default.scss';

const Default = ({ label = null, labelPosition = 'bottom' }) => {
  const size = 48;
  return (
    <div
      className={`govrs-loader govrs-loader--default govrs-loader--label-${labelPosition}`}
      style={{ width: size, height: size }}
    >
      {label && labelPosition === 'top' && (
        <div className="govrs-loader__label govrs-loader__label--top">
          {label}
        </div>
      )}
      {label && labelPosition === 'left' && (
        <div className={`govrs-loader__label govrs-loader__label--left`}>
          {label}
        </div>
      )}
      <div
        className="govrs-loader__svgwrap"
        style={{ width: size, height: size }}
      >
        <svg className="govrs-loader__spinner" viewBox="0 0 50 50">
          <circle
            className="govrs-loader__path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </svg>
      </div>
      {label && labelPosition === 'right' && (
        <div className={`govrs-loader__label govrs-loader__label--right`}>
          {label}
        </div>
      )}
      {label && labelPosition === 'bottom' && (
        <div className="govrs-loader__label govrs-loader__label--bottom">
          {label}
        </div>
      )}
    </div>
  );
};

export default Default;
