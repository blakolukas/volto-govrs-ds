import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Tooltip.scss';

const Tooltip = ({
  icon = null,
  title = '',
  position = 'top',
  state = '',
  children,
  content = null,
}) => {
  const posClass = `br-tooltip--${position}`;
  const stateClass = state ? `br-tooltip--state-${state}` : '';
  const hasIcon = !!icon;
  const hasContent = content !== null && content !== undefined;
  const isChildTrigger =
    hasContent && children !== null && children !== undefined;
  const triggerNode = isChildTrigger ? children : null;
  const bodyNode = hasContent ? content : children;

  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const [offset, setOffset] = useState(null);

  const updateOffset = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect) return;
    const size =
      position === 'left' || position === 'right'
        ? Math.round(rect.width / 2)
        : Math.round(rect.height / 2);
    setOffset(size);
  }, [position]);

  useEffect(() => {
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [updateOffset]);

  const inlineStyle = offset
    ? { '--br-tooltip-offset': `${offset}px` }
    : undefined;

  return (
    <span
      ref={containerRef}
      style={inlineStyle}
      className={`br-tooltip ${posClass} ${stateClass}`}
    >
      {triggerNode && React.isValidElement(triggerNode) ? (
        <span
          ref={triggerRef}
          onMouseEnter={updateOffset}
          onFocus={updateOffset}
        >
          {React.cloneElement(
            triggerNode,
            Object.assign({}, triggerNode.props, {
              ...(triggerNode.props &&
              triggerNode.props['data-tooltip-preserve']
                ? {}
                : {
                    className: `${triggerNode.props.className ? triggerNode.props.className + ' ' : ''}br-tooltip-trigger`,
                  }),
              'aria-haspopup': 'true',
            }),
          )}
        </span>
      ) : triggerNode ? (
        <span
          ref={triggerRef}
          onMouseEnter={updateOffset}
          onFocus={updateOffset}
          className="br-tooltip-trigger"
          aria-haspopup="true"
        >
          {triggerNode}
        </span>
      ) : (
        <button
          type="button"
          className="br-tooltip-trigger"
          aria-haspopup="true"
          ref={triggerRef}
          onMouseEnter={updateOffset}
          onFocus={updateOffset}
        >
          <span className="br-tooltip-trigger-icon">i</span>
        </button>
      )}

      <div
        className={`br-tooltip-box ${hasIcon ? 'has-icon' : ''}`}
        role="tooltip"
      >
        {hasIcon ? (
          <div className="br-tooltip-inner">
            <span className="br-tooltip-icon">{icon}</span>
            <div className="br-tooltip-main">
              {title && <div className="br-tooltip-title">{title}</div>}
              <div className="br-tooltip-body">{bodyNode}</div>
            </div>
          </div>
        ) : (
          <>
            {title && (
              <div className={`br-tooltip-header`}>
                {title && <div className="br-tooltip-title">{title}</div>}
              </div>
            )}

            <div className="br-tooltip-body">{bodyNode}</div>
          </>
        )}

        <div className="br-tooltip-arrow" aria-hidden="true" />
      </div>
    </span>
  );
};

export default Tooltip;
