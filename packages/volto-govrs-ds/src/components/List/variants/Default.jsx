import React, { useMemo } from 'react';
import './Default.scss';

export default function Default({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
  horizontal = false,
  labeled = false,
  collapsible = false,
}) {
  const listClass = horizontal
    ? 'list-default list-default--horizontal'
    : 'list-default';
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
    <div>
      {groups.map((group, gi) => (
        <section className="list-group" key={group.label ?? `group-${gi}`}>
          {group.label && (
            <div className="list-group__header">
              {effectiveCollapsible ? (
                <button
                  type="button"
                  className="list-group__toggle"
                  aria-expanded={!!openMap.get(group.label)}
                  onClick={() => toggleGroup(group.label)}
                >
                  <span className="list-group__label-text">{group.label}</span>
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
              ) : (
                <div className="list-group__label-text">{group.label}</div>
              )}
            </div>
          )}
          {effectiveCollapsible && !openMap.get(group.label) ? null : (
            <ul className={listClass}>
              {group.items.map((item, idx) => {
                const hasImage = !!item.image;
                const hasIcon = !!item.icon && !hasImage;

                return (
                  <li key={itemKey(item, idx)} className="list-default__item">
                    <div className="list-default__inner">
                      {(hasImage || hasIcon) && (
                        <div className="list-default__media" aria-hidden>
                          {hasImage ? (
                            <img
                              src={item.image}
                              alt={item.imageAlt || item.title || ''}
                              className="list-default__image"
                            />
                          ) : (
                            <span className="list-default__icon">
                              {item.icon}
                            </span>
                          )}
                        </div>
                      )}

                      <div
                        className={`list-default__content ${item.text ? '' : 'list-default__content--no-text'}`}
                      >
                        <div className="list-default__title">{item.title}</div>
                        {item.text && (
                          <div className="list-default__text">{item.text}</div>
                        )}
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
