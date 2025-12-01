import React from 'react';
import './Link.scss';

export default function Link({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
  numbered = false,
  iconified = false,
  invert = false,
}) {
  return (
    <nav className="list-link" role="navigation">
      <ul className="list-link__list">
        {items.map((item, idx) => {
          const showIcon = iconified && !!item.icon;
          const showNumber = !showIcon && numbered;

          return (
            <li key={itemKey(item, idx)} className="list-link__item">
              {showIcon || showNumber ? (
                <div className="list-link__left" aria-hidden>
                  {showIcon ? (
                    <span className="list-link__icon">{item.icon}</span>
                  ) : (
                    <span className="list-link__number">{idx + 1}</span>
                  )}
                </div>
              ) : null}

              <div className="list-link__content">
                {invert ? (
                  <>
                    <a href={item.href || '#'} className="list-link__anchor">
                      {item.title}
                    </a>
                    <p className="list-link__meta">{item.meta || ''}</p>
                  </>
                ) : (
                  <>
                    <p className="list-link__meta">{item.meta || ''}</p>
                    <a href={item.href || '#'} className="list-link__anchor">
                      {item.title}
                    </a>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
