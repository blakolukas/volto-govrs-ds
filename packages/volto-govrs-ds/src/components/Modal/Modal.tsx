import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type ModalProps = {
  title?: string;
  onClose?: () => void;
  buttonLeft?: { label: string; onClick: () => void };
  buttonRight?: { label: string; onClick: () => void };
  type: 'alert' | 'options' | 'items' | 'inputs';
  children?: React.ReactNode;
  options?: string[];
  label?: string;
  items?: { label: string; img: string; content?: React.ReactNode }[];
  inputs?: { label: string; placeholder: string; auxiliaryText?: string }[];
  onSubmit?: (data: { selectedOption?: string; selectedIndex?: number; inputValues?: { [key: string]: string } }) => void;
  closeOnOverlayClick?: boolean;
};

function Modal({
  title,
  onClose,
  buttonLeft,
  buttonRight,
  type,
  children,
  options,
  label,
  items,
  inputs,
  onSubmit,
  closeOnOverlayClick = true,
}: ModalProps) {
  const [imageErrors, setImageErrors] = React.useState<Set<number>>(new Set());
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [inputValues, setInputValues] = React.useState<{ [key: string]: string }>({});
  const modalRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleInputChange = (label: string, value: string) => {
    setInputValues(prev => ({ ...prev, [label]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      if (type === 'options' && selectedOption !== null && options) {
        onSubmit({
          selectedOption: options[selectedOption],
          selectedIndex: selectedOption,
        });
      } else if (type === 'inputs') {
        onSubmit({ inputValues });
      }
    }
    if (buttonRight?.onClick) {
      buttonRight.onClick();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === overlayRef.current && onClose) {
      onClose();
    }
  };

  // Keyboard navigation (ESC key)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose && closeOnOverlayClick) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, closeOnOverlayClick]);

  // Focus trap
  React.useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    modal.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', handleTabKey);
  }, []);

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div
        className="modal-wrapper"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <span id="modal-title">{title}</span>
          {!(type === 'alert') && (
            <button
              type="button"
              className="modal-close"
              aria-label="Fechar modal"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>

        <div className="modal-body">
          {type === 'alert' && <p>{children}</p>}
          {type === 'options' && (
            <>
              <h4>{label}</h4>
              <p>{children}</p>
              <p className='modal-option-select-text'>Selecione uma opção:</p>
              {options?.map((option, index) => (
                <div key={index} className='modal-option-div'>
                  <input
                    type="radio"
                    name="modal-option-input"
                    id={`option-${index}`}
                    className="modal-option-input"
                    checked={selectedOption === index}
                    onChange={() => setSelectedOption(index)}
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </div>
              ))}
            </>
          )}
          {type === 'items' && (
            <>
              <div className='modal-items-children'>
                {children}
              </div>
              <div className='modal-items'>
                {items?.map((item, index) => {
                  const isOpen = openItems.has(index);
                  return (
                    <React.Fragment key={index}>
                      <div className='modal-items-item'>
                        <div
                          className='modal-items-item-header'
                          onClick={() => toggleItem(index)}
                        >
                          <div className='modal-items-item-content'>
                            {item.img && !imageErrors.has(index) ? (
                              <img
                                className='modal-items-item-image'
                                src={item.img}
                                alt={item.label}
                                onError={() => handleImageError(index)}
                              />
                            ) : (
                              <div className="modal-items-placeholder">
                                <FontAwesomeIcon icon={faXmark} />
                              </div>
                            )}
                            {item.label}
                          </div>
                          <FontAwesomeIcon
                            icon={isOpen ? faChevronUp : faChevronDown}
                            className="modal-items-toggle-icon"
                          />
                        </div>
                        {isOpen && item.content && (
                          <div className='modal-items-item-expanded'>
                            {item.content}
                          </div>
                        )}
                      </div>
                      {index < (items?.length || 0) - 1 && <hr />}
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          )}
          {type === 'inputs' && 
            <>
              <div className='inputs-children'>
                {children}
              </div>
              <div className='inputs-list'>
                {inputs?.map((input, index) => (
                  <div key={index} className='input-item'>
                    <label className='input-label'>{input.label}</label>
                    <input
                      type="text"
                      className='input-field'
                      placeholder={input.placeholder}
                      value={inputValues[input.label] || ''}
                      onChange={(e) => handleInputChange(input.label, e.target.value)}
                    />
                    {input.auxiliaryText && (
                      <p className='input-auxiliary-text'>{input.auxiliaryText}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          }
        </div>

        {(buttonLeft || buttonRight) && (
          <div className="modal-footer">
            {buttonLeft && (
              <button onClick={buttonLeft.onClick} className="modal-button-left">
                {buttonLeft.label}
              </button>
            )}
            {buttonRight && (
              <button
                onClick={type === 'options' || type === 'inputs' ? handleSubmit : buttonRight.onClick}
                className="modal-button-right"
              >
                {buttonRight.label}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
