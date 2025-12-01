import React, { useEffect, useState } from 'react';
import './Percentage.scss';

const Percentage = ({ value = 65, color = '#1A7235' }) => {
  const desiredStrokePx = 10;
  const size = 84;
  const spacing = 30;
  const svgSize = size;
  const cx = svgSize / 2;
  const cy = svgSize / 2;

  const strokeWidth = desiredStrokePx;
  const r = svgSize / 2 - strokeWidth / 2;
  const innerR = r - strokeWidth / 2 - spacing;
  const circumference = 2 * Math.PI * r;

  const strokeColor = color;

  const clamp = (v) => {
    const n = Number(String(v).replace(/[^0-9.-]/g, '')) || 0;
    return Math.max(0, Math.min(100, n));
  };

  const pct = clamp(value);
  const targetOffset = circumference - (pct / 100) * circumference;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const t = setTimeout(() => setOffset(targetOffset), 20);
    return () => clearTimeout(t);
  }, [targetOffset]);

  return (
    <div
      className="porcentagem-container"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        boxSizing: 'border-box',
        minWidth: 0,
        minHeight: 0,
      }}
    >
      <div
        className={`porcentagem-svg`}
        style={{ '--govrs-loader-color': strokeColor }}
        data-govrs-stroke={strokeColor}
      >
        <h2 style={{ color: strokeColor }}>{Math.round(pct)}%</h2>
        <svg
          x="0px"
          y="0px"
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="svg"
          width={size}
          height={size}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            maxWidth: `${size}px`,
            maxHeight: `${size}px`,
            display: 'block',
            boxSizing: 'border-box',
          }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            className="circle-bg"
            cx={cx}
            cy={cy}
            r={r}
            transform={`rotate(270 ${cx} ${cy})`}
            strokeWidth={strokeWidth}
          />
          <circle
            className={`circle`}
            cx={cx}
            cy={cy}
            r={r}
            transform={`rotate(270 ${cx} ${cy})`}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ stroke: strokeColor }}
          />

          <circle
            className="circle-inner"
            cx={cx}
            cy={cy}
            r={innerR}
            transform={`rotate(270 ${cx} ${cy})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default Percentage;
