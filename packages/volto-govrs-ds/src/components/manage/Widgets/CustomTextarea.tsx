import React, { useState } from 'react';

// Icon components for feedback
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
);

const ErrorIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
  </svg>
);

const WarningIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
);

const stateFeedback = {
  success: { icon: CheckIcon, message: 'Campo correto' },
  error: { icon: ErrorIcon, message: 'Campo com erro' },
  warning: { icon: WarningIcon, message: 'Atenção' },
  info: { icon: InfoIcon, message: 'Informação' },
};

type CustomTextareaProps = {
  value: string;
  size?: 'large' | 'small';
  darkMode?: boolean;
  State?: 'warning' | 'error' | 'success' | 'info';
  onChange: (value: string) => void;
  id: string;
  title: string;
  description?: string;
  maxLength?: number;
  placeholder?: string;
  isDisabled?: boolean;
  left?: boolean;
};

function CustomTextarea({
  value,
  onChange,
  id,
  title,
  description,
  size,
  darkMode = false,
  State,
  maxLength,
  placeholder,
  left = false,
  isDisabled = false,
}: CustomTextareaProps) {
  const [lengthError, setLengthError] = useState('');

  const handleChange = (newValue: string) => {
    if (maxLength && newValue.length > maxLength) {
      const exceeded = newValue.length - maxLength;
      setLengthError(`You have exceeded word limit by ${exceeded}`);
    } else {
      setLengthError('');
    }
    onChange(newValue);
  };

  const classes = [
    'br-textarea',
    size,
    State === 'error' ? 'danger' : State,
    darkMode && 'dark-mode',
    left && 'left',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <label htmlFor={id}>{title}</label>
      <div>
        <textarea
          id={id}
          value={value || ''}
          onChange={(e) => handleChange(e.target.value)}
          aria-describedby={description ? `${id}-description` : undefined}
          placeholder={placeholder}
          disabled={isDisabled}
        />
        {State && stateFeedback[State] && (
          <span
            className={`feedback ${State === 'error' ? 'danger' : State}`}
            role="alert"
          >
            {React.createElement(stateFeedback[State].icon)}{' '}
            <span>{stateFeedback[State].message}</span>
          </span>
        )}
        {description && (
          <small id={`${id}-description`} className="text-muted">
            {description}
          </small>
        )}
        {lengthError && (
          <small className="text-danger" role="alert">
            {lengthError}
          </small>
        )}
      </div>
    </div>
  );
}

export default CustomTextarea;
