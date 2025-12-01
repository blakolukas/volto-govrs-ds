import React, { useMemo } from 'react';
import './Check.scss';

export default function Check({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
  horizontal = false,
  labeled = false,
  collapsible = false,
  onToggle,
  onToggleGroup,
  multiple = false,
  title,
}) {
  const listClass = horizontal
    ? 'list-check list-check--horizontal'
    : 'list-check';
  const effectiveCollapsible = labeled ? collapsible : false;

  const groups = useMemo(() => {
    if (!labeled) return [{ label: null, items }];
    const map = new Map();
    items.forEach((it) => {
      const label = it?.label ?? null;
      if (!map.has(label)) map.set(label, []);
      map.get(label).push(it);
    });
    return Array.from(map.entries()).map(([label, items]) => ({
      label,
      items,
    }));
  }, [items, labeled]);

  const [openMap, setOpenMap] = React.useState(() => new Map());

  function toggleGroup(label) {
    setOpenMap((prev) => {
      const next = new Map(prev);
      next.set(label, !next.get(label));
      return next;
    });
  }

  return (
    <div className="list-check-wrapper">
      {title && <h3 className="list-check__title">{title}</h3>}
      {groups.map((group, gi) => (
        <section className="list-group" key={group.label ?? `group-${gi}`}>
          {group.label && (
            <div className="list-group__header">
              <div className="list-group__header-left">
                <span className="list-group__label-text">{group.label}</span>

                {effectiveCollapsible && horizontal ? (
                  <button
                    type="button"
                    className="list-group__toggle"
                    aria-expanded={!!openMap.get(group.label)}
                    onClick={() => toggleGroup(group.label)}
                  >
                    <span className="list-group__toggle-icon" aria-hidden>
                      {openMap.get(group.label) ? (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 15l6-6 6 6"
                            stroke="#2E7D32"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="#2E7D32"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                ) : null}

                {labeled && multiple && (
                  <input
                    type="checkbox"
                    className="list-group__header-checkbox"
                    aria-label={`Selecionar todos em ${group.label}`}
                    checked={group.items.every((it) => !!it.checked)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      if (onToggleGroup) {
                        onToggleGroup(group.label, checked);
                      } else {
                        group.items.forEach((it) =>
                          onToggle?.(it, { multiple }),
                        );
                      }
                    }}
                  />
                )}
              </div>

              {!horizontal && effectiveCollapsible ? (
                <button
                  type="button"
                  className="list-group__toggle"
                  aria-expanded={!!openMap.get(group.label)}
                  onClick={() => toggleGroup(group.label)}
                >
                  <span className="list-group__toggle-icon" aria-hidden>
                    {openMap.get(group.label) ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 15l6-6 6 6"
                          stroke="#2E7D32"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#2E7D32"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              ) : null}
            </div>
          )}

          {effectiveCollapsible && !openMap.get(group.label) ? null : (
            <ul className={listClass}>
              {group.items.map((item, idx) => {
                const hasImage = !!item.image;
                const hasIcon = !!item.icon && !hasImage;

                return (
                  <li key={itemKey(item, idx)} className="list-check__item">
                    <div className="list-check__inner">
                      {(hasImage || hasIcon) && (
                        <div className="list-check__media" aria-hidden>
                          {hasImage ? (
                            <img
                              src={item.image}
                              alt={item.imageAlt || item.title || ''}
                              className="list-check__image"
                            />
                          ) : (
                            <span className="list-check__icon">
                              {item.icon}
                            </span>
                          )}
                        </div>
                      )}

                      <div
                        className={`list-check__content ${item.text ? '' : 'list-check__content--no-text'}`}
                      >
                        <div className="list-check__label-text">
                          {item.title}
                        </div>
                        {item.text && (
                          <div className="list-check__text">{item.text}</div>
                        )}
                      </div>

                      <div className="list-check__checkbox">
                        <input
                          type="checkbox"
                          aria-label={`Selecionar ${item.title}`}
                          checked={!!item.checked}
                          onChange={() => onToggle?.(item, { multiple })}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
