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
}: ModalProps) {
  const [imageErrors, setImageErrors] = React.useState<Set<number>>(new Set());
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

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

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-header">
          <span>{title}</span>
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

        {!(type === 'items') &&
        <div className="modal-footer">
          {buttonLeft &&
          <button onClick={buttonLeft?.onClick} className="modal-button-left">
            {buttonLeft?.label}
          </button>
          }
          {buttonRight &&
          <button onClick={buttonRight?.onClick} className="modal-button-right">
            {buttonRight?.label}
          </button>
          }
        </div>
        }
      </div>
    </div>
  );
}

export default Modal;
