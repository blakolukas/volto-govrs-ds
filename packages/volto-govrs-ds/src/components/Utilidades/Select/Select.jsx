import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import '../../../theme/Formularios/Select.scss';

export default function Select({
  options = [],
  value: controlledValue,
  defaultValue = null,
  onChange,
  placeholder = 'Placeholder',
  disabled = false,
  ariaLabel = 'Custom select',
  multiple = false,
  className = '',
  name,
  id,
}) {
  const [open, setOpen] = useState(false);
  const optionValues = useMemo(() => options.map((o) => o.value), [options]);

  const sanitizeValue = useCallback(
    (v) => {
      if (multiple) {
        if (!Array.isArray(v)) return [];
        return v.filter((x) => optionValues.indexOf(x) !== -1);
      }
      return optionValues.indexOf(v) !== -1 ? v : null;
    },
    [multiple, optionValues],
  );

  const [value, setValue] = useState(() => {
    if (controlledValue !== undefined) return sanitizeValue(controlledValue);
    if (multiple) return sanitizeValue(defaultValue ?? []);
    return sanitizeValue(defaultValue ?? null);
  });
  const [highlighted, setHighlighted] = useState(null);
  const listRef = useRef(null);
  const controlRef = useRef(null);
  const baseId = useRef(`br-select-${Math.random().toString(36).slice(2, 9)}`);

  const controlId = id || `${baseId.current}-control`;
  const listId = `${baseId.current}-list`;
  const resolvedName = name || (id ? `${id}-name` : `${baseId.current}-name`);

  useEffect(() => {
    if (controlledValue !== undefined) setValue(sanitizeValue(controlledValue));
  }, [controlledValue, sanitizeValue]);

  useEffect(() => {
    if (controlledValue === undefined) {
      setValue((prev) => sanitizeValue(prev));
    }
  }, [controlledValue, sanitizeValue]);

  useEffect(() => {
    if (open && highlighted != null) {
      const el =
        listRef.current?.querySelectorAll('.br-select__item')[highlighted];
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [open, highlighted]);

  function toggleOpen() {
    if (disabled) return;
    setOpen((s) => {
      const next = !s;
      if (next) {
        const firstSelected = multiple
          ? Array.isArray(value) && value.length
            ? optionValues.indexOf(value[0])
            : -1
          : optionValues.indexOf(value);
        setHighlighted(firstSelected >= 0 ? firstSelected : 0);
      }
      return next;
    });
  }

  function handleSelect(i) {
    const opt = options[i];
    if (!opt) return;
    if (multiple) {
      const current = Array.isArray(value) ? [...value] : [];
      const idx = current.indexOf(opt.value);
      if (idx === -1) current.push(opt.value);
      else current.splice(idx, 1);
      const next = current.filter((x) => optionValues.indexOf(x) !== -1);
      if (controlledValue === undefined) setValue(next);
      onChange?.(next, opt);
    } else {
      if (controlledValue === undefined) setValue(opt.value);
      onChange?.(opt.value, opt);
      setOpen(false);
    }
  }

  function onKeyDown(e) {
    if (disabled) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setHighlighted((h) =>
        h == null ? 0 : Math.min(h + 1, options.length - 1),
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setOpen(true);
      setHighlighted((h) =>
        h == null ? options.length - 1 : Math.max(h - 1, 0),
      );
    } else if (e.key === 'Home') {
      e.preventDefault();
      setOpen(true);
      setHighlighted(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setOpen(true);
      setHighlighted(options.length - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) setOpen(true);
      else if (highlighted != null) handleSelect(highlighted);
    } else if (e.key === 'Escape') {
      setOpen(false);
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  }

  const selectedOption = multiple
    ? options.find(
        (o) => o.value === (Array.isArray(value) ? value[0] : null),
      ) ?? null
    : options.find((o) => o.value === value) ?? null;

  return (
    <div
      className={`br-select ${multiple ? 'br-select--multiple' : ''} ${className ?? ''} ${disabled ? 'br-select--disabled' : ''}`}
    >
      <div
        className="br-select__control"
        id={controlId}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={disabled ? -1 : 0}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        ref={controlRef}
        aria-label={ariaLabel}
        aria-controls={listId}
      >
        <div className="br-select__content">
          <span>
            {multiple
              ? Array.isArray(value) && value.length > 0
                ? value.length === 1
                  ? options.find((o) => o.value === value[0])?.label ?? ''
                  : `${options.find((o) => o.value === value[0])?.label ?? ''} + (${value.length - 1})`
                : placeholder
              : selectedOption?.label ?? placeholder}
          </span>
        </div>
      </div>

      {open && (
        <div
          id={listId}
          className="br-select__list"
          role="listbox"
          ref={listRef}
          aria-label={ariaLabel}
        >
          <div
            className="br-select__item br-select__item--header"
            role="presentation"
            aria-hidden="true"
          >
            {placeholder}
          </div>
          {options.map((o, i) => {
            const isSelected = multiple
              ? Array.isArray(value) && value.indexOf(o.value) !== -1
              : value === o.value;
            return (
              <div
                key={o.value}
                id={`${baseId.current}-opt-${i}`}
                className={`br-select__item ${isSelected ? 'br-select__item--selected' : ''}`}
                role="option"
                aria-selected={isSelected}
                tabIndex={0}
                onMouseEnter={() => setHighlighted(i)}
                onClick={() => handleSelect(i)}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    handleSelect(i);
                  } else if (ev.key === 'ArrowDown') {
                    ev.preventDefault();
                    const next = Math.min(i + 1, options.length - 1);
                    setHighlighted(next);
                    const el =
                      listRef.current?.querySelectorAll('.br-select__item')[
                        next
                      ];
                    el && el.focus && el.focus();
                  } else if (ev.key === 'ArrowUp') {
                    ev.preventDefault();
                    const prev = Math.max(i - 1, 0);
                    setHighlighted(prev);
                    const el =
                      listRef.current?.querySelectorAll('.br-select__item')[
                        prev
                      ];
                    el && el.focus && el.focus();
                  } else if (ev.key === 'Escape') {
                    setOpen(false);
                    controlRef.current && controlRef.current.focus();
                  }
                }}
              >
                <span className="item-left-icon" aria-hidden></span>
                <span>{o.label}</span>
                <span className="item-icon">›</span>
              </div>
            );
          })}
        </div>
      )}

      {!multiple && (
        <input
          type="hidden"
          name={resolvedName}
          value={value != null ? value : ''}
        />
      )}
      {multiple &&
        Array.isArray(value) &&
        value.map((v) => (
          <input key={v} type="hidden" name={resolvedName} value={v} />
        ))}
    </div>
  );
}
