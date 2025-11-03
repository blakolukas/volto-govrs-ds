import React, { useState } from 'react';
import Badges from '../../Badges/Badges';

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
  renderFeedback?: (args: {
    value: string;
    isDisabled: boolean;
    state?: 'warning' | 'error' | 'success' | 'info' | undefined;
    lengthError: string;
    maxLength?: number;
  }) => React.ReactNode;
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
  renderFeedback,
}: CustomTextareaProps) {
  const [lengthError, setLengthError] = useState('');

  const handleChange = (newValue: string) => {
    if (maxLength && newValue.length > maxLength) {
      const exceeded = newValue.length - maxLength;
      setLengthError(
        `O texto excede o limite em ${exceeded} caractere${exceeded > 1 ? 's' : ''}`,
      );
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

        {(() => {
          const feedbackNode =
            typeof renderFeedback === 'function'
              ? renderFeedback({
                  value,
                  isDisabled: !!isDisabled,
                  state: State,
                  lengthError,
                  maxLength,
                })
              : null;

          const defaultBadge = !feedbackNode ? (
            isDisabled ? (
              <Badges variant="warning" message="Campo desabilitado" />
            ) : lengthError ? (
              <Badges variant="error" message={lengthError} />
            ) : State === 'error' ? (
              <Badges variant="error" message="Campo com erro" />
            ) : State === 'success' ? (
              <Badges variant="success" message="Campo correto" />
            ) : State === 'warning' ? (
              <Badges variant="warning" message="Atenção" />
            ) : State === 'info' ? (
              <Badges variant="info" message="Informação" />
            ) : null
          ) : null;

          return (
            (feedbackNode || defaultBadge) && (
              <div
                id={`${id}-feedback`}
                className="br-textarea__feedback"
                role="status"
                aria-live="polite"
              >
                {feedbackNode || defaultBadge}
              </div>
            )
          );
        })()}
        {description && (
          <small id={`${id}-description`} className="text-muted">
            {description}
          </small>
        )}
      </div>
    </div>
  );
}

export default CustomTextarea;
