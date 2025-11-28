import React, { useRef, useState, useEffect, useCallback } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './stepHorizontal.scss';

const StepHorizontal = ({
  steps = [],
  labelPosition = 'below',
  variant = '',
}) => {
  const containerRef = useRef(null);
  const [labelSlotPx, setLabelSlotPx] = useState(null);

  const updateLabelSlot = useCallback(() => {
    if (!containerRef.current) return;
    if (labelPosition !== 'above') {
      setLabelSlotPx(null);
      return;
    }
    containerRef.current.classList.add('measuring');
    const labels = containerRef.current.querySelectorAll('.step-label.above');
    if (!labels || labels.length === 0) {
      containerRef.current.classList.remove('measuring');
      setLabelSlotPx(null);
      return;
    }
    let max = 0;
    labels.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r && r.height > max) max = r.height;
    });
    const slot = Math.round(max + 8);
    containerRef.current.classList.remove('measuring');
    setLabelSlotPx(slot);
  }, [labelPosition]);

  useEffect(() => {
    updateLabelSlot();
    window.addEventListener('resize', updateLabelSlot);

    let ro = null;
    try {
      if (window.ResizeObserver && containerRef.current) {
        ro = new ResizeObserver(() => {
          updateLabelSlot();
        });
        const labels =
          containerRef.current.querySelectorAll('.step-label.above');
        labels.forEach((el) => ro.observe(el));
      }
    } catch (err) {}

    return () => {
      window.removeEventListener('resize', updateLabelSlot);
      if (ro) {
        try {
          ro.disconnect();
        } catch (e) {}
      }
    };
  }, [updateLabelSlot, steps, labelPosition]);

  const isDottedVariant = variant === 'dotted';
  const isPlainVariant = variant === 'plain';

  const variantClass = variant ? `variant-${variant}` : '';

  const inlineStyle = labelSlotPx
    ? { '--label-slot': `${labelSlotPx}px` }
    : undefined;

  return (
    <div
      ref={containerRef}
      style={inlineStyle}
      className={`br-step-horizontal label-${labelPosition} ${variantClass}`}
      role="list"
    >
      {steps.map((step, idx) => {
        const isActive = !!step.active;
        const number = step.number ?? idx + 1;

        const isClickable = !!(step.href || typeof step.onClick === 'function');
        const hasState = !!step.state;
        const itemClass = `step-item ${hasState ? 'has-state' : ''}`;
        const handleClick = (e) => {
          if (typeof step.onClick === 'function') {
            step.onClick(e, step, idx);
          }
          if (e && e.defaultPrevented) return;
        };
        const renderStateIcon = (state, dotted = false) => {
          if (dotted) {
            switch (state) {
              case 'success':
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M6.2 11.3L2.6 7.7a.9.9 0 0 1 1.3-1.3l2.3 2.3 6-6a.9.9 0 1 1 1.3 1.3l-6.9 6.9a.9.9 0 0 1-1.4 0z"
                    />
                  </svg>
                );
              case 'error':
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M10.6 5.4a.9.9 0 0 0-1.2 0L8 6.8 6.6 5.4A.9.9 0 0 0 5.4 6.6L6.8 8l-1.4 1.4a.9.9 0 1 0 1.2 1.2L8 9.2l1.4 1.4a.9.9 0 0 0 1.2-1.2L9.2 8l1.4-1.4a.9.9 0 0 0 0-1.2z"
                    />
                  </svg>
                );
              case 'warning':
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M8 3.4L14 12H2L8 3.4zM8 6.5a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4zm0 2.3a.6.6 0 0 0-.6.6v1.1c0 .3.3.6.6.6s.6-.3.6-.6V9.4c0-.3-.3-.6-.6-.6z"
                    />
                  </svg>
                );
              case 'info':
              default:
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M8 3.2A4.8 4.8 0 1 0 8 12.8 4.8 4.8 0 0 0 8 3.2zM8.6 10.9H7.4V7.4h1.2v3.5zM8 5.4a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z"
                    />
                  </svg>
                );
            }
          }

          switch (state) {
            case 'success':
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle cx="14" cy="14" r="14" fill="#168821" />
                  <path
                    d="M11.4063 19.75L6.21877 14.5625C5.90627 14.25 5.90627 13.7188 6.21877 13.4062L7.34377 12.2812C7.65627 11.9688 8.15627 11.9688 8.46877 12.2812L12 15.7812L19.5 8.28125C19.8125 7.96875 20.3125 7.96875 20.625 8.28125L21.75 9.40625C22.0625 9.71875 22.0625 10.25 21.75 10.5625L12.5625 19.75C12.25 20.0625 11.7188 20.0625 11.4063 19.75Z"
                    fill="white"
                  />
                </svg>
              );
            case 'error':
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle cx="14" cy="14" r="14" fill="#E52207" />
                  <path
                    d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84377 19.625 9.46877 19.2188L8.78127 18.5312C8.37502 18.1562 8.37502 17.5312 8.78127 17.1562L11.9063 14L8.78127 10.875C8.37502 10.5 8.37502 9.875 8.78127 9.5L9.46877 8.8125C9.84377 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
                    fill="white"
                  />
                </svg>
              );
            case 'warning':
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="7.5"
                    fill="white"
                    stroke="#1A7235"
                  />
                  <circle cx="14" cy="14" r="14" fill="#FFCD07" />
                  <path
                    d="M22.7813 19.7812C23.3438 20.7812 22.625 22 21.4688 22H6.50002C5.34377 22 4.62502 20.75 5.18752 19.7812L12.6875 6.75C13.25 5.75 14.7188 5.78125 15.2813 6.75L22.7813 19.7812ZM14 17.0625C13.1875 17.0625 12.5625 17.7188 12.5625 18.5C12.5625 19.3125 13.1875 19.9375 14 19.9375C14.7813 19.9375 15.4375 19.3125 15.4375 18.5C15.4375 17.7188 14.7813 17.0625 14 17.0625ZM12.625 11.9062L12.8438 16.1562C12.875 16.375 13.0313 16.5 13.2188 16.5H14.75C14.9375 16.5 15.0938 16.375 15.125 16.1562L15.3438 11.9062C15.375 11.6875 15.1875 11.5 14.9688 11.5H13C12.7813 11.5 12.5938 11.6875 12.625 11.9062Z"
                    fill="#333333"
                  />
                </svg>
              );
            case 'info':
            default:
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                  width="28"
                  height="28"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="14" cy="14" r="14" fill="#2d86d8" />
                  <path
                    fill="white"
                    transform="translate(6.25,6.25)"
                    d="M7.75 0C3.46875 0 0 3.5 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12 15.5 15.5 12.0312 15.5 7.75C15.5 3.5 12 0 7.75 0ZM7.75 3.4375C8.46875 3.4375 9.0625 4.03125 9.0625 4.75C9.0625 5.5 8.46875 6.0625 7.75 6.0625C7 6.0625 6.4375 5.5 6.4375 4.75C6.4375 4.03125 7 3.4375 7.75 3.4375ZM9.5 11.375C9.5 11.5938 9.3125 11.75 9.125 11.75H6.375C6.15625 11.75 6 11.5938 6 11.375V10.625C6 10.4375 6.15625 10.25 6.375 10.25H6.75V8.25H6.375C6.15625 8.25 6 8.09375 6 7.875V7.125C6 6.9375 6.15625 6.75 6.375 6.75H8.375C8.5625 6.75 8.75 6.9375 8.75 7.125V10.25H9.125C9.3125 10.25 9.5 10.4375 9.5 10.625V11.375Z"
                  />
                </svg>
              );
          }
        };

        if (isPlainVariant) {
          const circleCls =
            `step-circle ${isActive ? 'active' : ''} plain`.trim();
          let circleNode = null;

          if (step.href) {
            circleNode = (
              <a
                className={`${circleCls} ${isClickable ? 'clickable' : ''}`.trim()}
                href={step.href}
                onClick={handleClick}
                aria-current={isActive ? 'step' : undefined}
                aria-label={step.label || `Step ${idx + 1}`}
              />
            );
          } else if (isClickable) {
            circleNode = (
              <button
                type="button"
                className={`${circleCls} ${isClickable ? 'clickable' : ''}`.trim()}
                onClick={handleClick}
                aria-current={isActive ? 'step' : undefined}
              />
            );
          } else {
            circleNode = (
              <div
                className={circleCls}
                aria-current={isActive ? 'step' : undefined}
              />
            );
          }

          if (step.label) {
            const map = {
              above: 'top',
              below: 'bottom',
              left: 'left',
              right: 'right',
            };
            const tipPos = map[labelPosition] || 'top';
            const preservedTrigger = React.isValidElement(circleNode)
              ? React.cloneElement(circleNode, {
                  'data-tooltip-preserve': true,
                })
              : circleNode;
            return (
              <React.Fragment key={idx}>
                <div className={itemClass} role="listitem">
                  {labelPosition === 'left' && step.label && (
                    <div className={`step-label left`}>{step.label}</div>
                  )}
                  {step.label && labelPosition === 'above' && (
                    <div className={`step-label above`}>{step.label}</div>
                  )}
                  <Tooltip
                    position={tipPos}
                    state={step.state}
                    content={step.label}
                  >
                    {preservedTrigger}
                  </Tooltip>
                </div>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={idx}>
              <div className={itemClass} role="listitem">
                {labelPosition === 'left' && step.label && (
                  <div className={`step-label left`}>{step.label}</div>
                )}
                {step.label && labelPosition === 'above' && (
                  <div className={`step-label above`}>{step.label}</div>
                )}
                {circleNode}
              </div>
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={idx}>
            {isDottedVariant && step.state ? (
              <div className={itemClass} role="listitem">
                {labelPosition === 'left' && step.label && (
                  <div className={`step-label left`}>{step.label}</div>
                )}
                {step.label && labelPosition === 'above' && (
                  <div className={`step-label above`}>{step.label}</div>
                )}
                {(() => {
                  const baseCls =
                    `step-status step-status--${step.state} step-status--dotted ${isActive ? 'active' : ''} ${isClickable ? 'clickable' : ''}`.trim();
                  let statusNode = null;
                  if (step.href) {
                    statusNode = (
                      <a
                        className={baseCls}
                        href={step.href}
                        onClick={handleClick}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        {renderStateIcon(step.state, true)}
                      </a>
                    );
                  } else if (isClickable) {
                    statusNode = (
                      <button
                        type="button"
                        className={baseCls}
                        onClick={handleClick}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        {renderStateIcon(step.state, true)}
                      </button>
                    );
                  } else {
                    statusNode = (
                      <div
                        className={baseCls}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        {renderStateIcon(step.state, true)}
                      </div>
                    );
                  }

                  if (step.label) {
                    const map = {
                      above: 'top',
                      below: 'bottom',
                      left: 'left',
                      right: 'right',
                    };
                    const tipPos = map[labelPosition] || 'top';
                    return (
                      <Tooltip
                        position={tipPos}
                        state={step.state}
                        content={step.label}
                      >
                        {statusNode}
                      </Tooltip>
                    );
                  }

                  return statusNode;
                })()}
              </div>
            ) : (
              <div className={itemClass} role="listitem">
                {labelPosition === 'left' && step.label && (
                  <div className={`step-label left`}>{step.label}</div>
                )}
                {step.label && labelPosition === 'above' && (
                  <div className={`step-label above`}>{step.label}</div>
                )}

                {(() => {
                  const circleCls =
                    `step-circle ${isActive ? 'active' : ''} ${isDottedVariant ? 'dotted' : ''}`.trim();
                  let circleNode = null;

                  if (step.href) {
                    circleNode = (
                      <a
                        className={`${circleCls} ${isClickable ? 'clickable' : ''}`.trim()}
                        href={step.href}
                        onClick={handleClick}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        {!isDottedVariant &&
                          (step.icon ? (
                            <span className="step-icon">{step.icon}</span>
                          ) : (
                            <span className="step-number">{number}</span>
                          ))}
                        {!isDottedVariant && step.state && (
                          <span
                            className={`step-status step-status--${step.state} ${isActive ? 'active' : ''}`}
                          >
                            {renderStateIcon(step.state)}
                          </span>
                        )}
                      </a>
                    );
                  } else if (isClickable) {
                    circleNode = (
                      <button
                        type="button"
                        className={`${circleCls} ${isClickable ? 'clickable' : ''} ${isDottedVariant ? 'dotted' : ''}`.trim()}
                        onClick={handleClick}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        {!isDottedVariant &&
                          (step.icon ? (
                            <span className="step-icon">{step.icon}</span>
                          ) : (
                            <span className="step-number">{number}</span>
                          ))}
                        {!isDottedVariant && step.state && (
                          <span
                            className={`step-status step-status--${step.state}`}
                          >
                            {renderStateIcon(step.state)}
                          </span>
                        )}
                      </button>
                    );
                  } else {
                    circleNode = (
                      <div
                        className={circleCls}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        {!isDottedVariant &&
                          (step.icon ? (
                            <span className="step-icon">{step.icon}</span>
                          ) : (
                            <span className="step-number">{number}</span>
                          ))}
                      </div>
                    );
                  }

                  if (isDottedVariant && step.label) {
                    const map = {
                      above: 'top',
                      below: 'bottom',
                      left: 'left',
                      right: 'right',
                    };
                    const tipPos = map[labelPosition] || 'top';
                    const preservedTrigger = React.isValidElement(circleNode)
                      ? React.cloneElement(circleNode, {
                          'data-tooltip-preserve': true,
                        })
                      : circleNode;
                    return (
                      <Tooltip
                        position={tipPos}
                        state={step.state}
                        content={step.label}
                      >
                        {preservedTrigger}
                      </Tooltip>
                    );
                  }

                  return circleNode;
                })()}
                {!isDottedVariant &&
                  step.label &&
                  labelPosition === 'below' && (
                    <div className={`step-label below`}>{step.label}</div>
                  )}
                {step.label &&
                  labelPosition === 'right' &&
                  !isDottedVariant && (
                    <div className={`step-label right`}>{step.label}</div>
                  )}
                {labelPosition === 'left' && !step.label && null}
              </div>
            )}

            {idx < steps.length - 1 &&
              !isPlainVariant &&
              (() => {
                const next = Array.isArray(steps) ? steps[idx + 1] : undefined;
                const leftLarge = isDottedVariant && !!step.state;
                const rightLarge = isDottedVariant && !!(next && next.state);
                const cls =
                  `connector ${leftLarge ? 'adj-left-large' : ''} ${rightLarge ? 'adj-right-large' : ''}`.trim();
                return <div className={cls} aria-hidden="true" />;
              })()}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepHorizontal;
