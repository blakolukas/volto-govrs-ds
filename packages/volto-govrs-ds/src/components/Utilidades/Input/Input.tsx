import React, { useState } from 'react';
import '../../../theme/Formularios/Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faXmark,
  faTriangleExclamation,
  faInfoCircle,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

interface StateConfig {
  icon: IconDefinition;
  defaultMessage: string | null;
}

const stateConfig: Record<StateType, StateConfig> = {
  danger: { icon: faXmark, defaultMessage: 'Campo inválido' },
  success: { icon: faCheck, defaultMessage: 'Campo correto' },
  disabled: {
    icon: faTriangleExclamation,
    defaultMessage: 'Campo Desabilitado',
  },
  warning: { icon: faTriangleExclamation, defaultMessage: null },
  info: { icon: faInfoCircle, defaultMessage: null },
};

type StateType = 'danger' | 'success' | 'disabled' | 'warning' | 'info';

type InputProps = {
  id: string;
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  auxiliaryText?: string;
  leftIcon?: IconDefinition;
  isPassword?: boolean;
  State?: StateType;
  feedbackMessage?: string;
  isDisabled?: boolean;
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
  State,
  feedbackMessage,
  isDisabled = false,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const finalState = isDisabled ? 'disabled' : State;

  const classes = ['br-input', finalState].filter(Boolean).join(' ');

  const inputType = isPassword ? (isVisible ? 'text' : 'password') : 'text';

  const currentConfig = finalState ? stateConfig[finalState] : null;

  let finalFeedbackMessage: string | null = null;
  let showFeedback = false;

  if (currentConfig && feedbackMessage) {
    finalFeedbackMessage = feedbackMessage;
    showFeedback = true;
  }

  let inputClasses = [];
  if (!leftIcon) {
    inputClasses.push('padding-default');
  }
  if (!isPassword) {
    inputClasses.push('padding-default-no-eye');
  }
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
          disabled={isDisabled}
          className={inputClassName}
          readOnly={finalState === 'disabled' && !isDisabled}
        />

        {isPassword && (
          <button
            type="button"
            className="visibility-toggle"
            onClick={() => setIsVisible(!isVisible)}
            aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
            disabled={isDisabled}
          >
            <FontAwesomeIcon
              icon={isVisible ? faEyeSlash : faEye}
              color="#1A7235"
            />
          </button>
        )}
      </div>

      {showFeedback && currentConfig && finalFeedbackMessage && (
        <span className={`feedback-message ${finalState}`} role="alert">
          <FontAwesomeIcon icon={currentConfig.icon} />
          <span>{finalFeedbackMessage}</span>
        </span>
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
