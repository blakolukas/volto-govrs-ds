import React, { useState } from 'react';
import '../../../theme/Formularios/Upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type StateType = 'danger' | 'success' | 'warning' | 'info';

type InputProps = {
  id: string;
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  auxiliaryText?: string;
  leftIcon?: IconDefinition;
  isPassword?: boolean;
  State?: StateType | null;
  disabled?: boolean;
  renderFeedback?: (args: {
    value: string | string[] | null;
    disabled: boolean;
    state?: StateType | null;
  }) => React.ReactNode;
};

function Input({
  id,
  title,
  value,
  onChange,
  placeholder,
  auxiliaryText,
  leftIcon,
  isPassword = false,
  State = null,
  disabled = false,
  renderFeedback,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const finalState: StateType | null = State ?? null;
  const classes = ['br-input', disabled ? 'disabled' : finalState]
    .filter(Boolean)
    .join(' ');
  const inputType = isPassword ? (isVisible ? 'text' : 'password') : 'text';

  const renderedFeedback =
    typeof renderFeedback === 'function'
      ? renderFeedback({
          value: value ?? null,
          disabled: !!disabled,
          state: finalState ?? null,
        })
      : null;

  const inputClasses: string[] = [];
  if (!leftIcon) inputClasses.push('padding-default');
  if (!isPassword) inputClasses.push('padding-default-no-eye');
  const inputClassName = inputClasses.join(' ');

  return (
    <div className={classes}>
      <label htmlFor={id}>{title}</label>

      <div className="input-wrapper">
        {leftIcon && (
          <span className="input-icon-left" aria-hidden="true">
            <FontAwesomeIcon icon={leftIcon} />
          </span>
        )}

        <input
          id={id}
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClassName}
          aria-describedby={renderedFeedback ? `${id}-feedback` : undefined}
        />

        {isPassword && (
          <button
            type="button"
            className="visibility-toggle"
            onClick={() => setIsVisible(!isVisible)}
            aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
            disabled={disabled}
          >
            <FontAwesomeIcon
              icon={isVisible ? faEyeSlash : faEye}
              color="#1A7235"
            />
          </button>
        )}
      </div>

      {renderedFeedback && (
        <div
          id={`${id}-feedback`}
          className="br-input__feedback"
          role="status"
          aria-live="polite"
        >
          {renderedFeedback}
        </div>
      )}

      {auxiliaryText && (
        <small id={`${id}-aux-text`} className="auxiliary-text">
          {auxiliaryText}
        </small>
      )}
    </div>
  );
}

export default Input;
