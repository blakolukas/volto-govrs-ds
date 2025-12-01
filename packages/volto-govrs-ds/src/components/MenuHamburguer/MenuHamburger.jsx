import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './MenuHamburger.css';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLevels, setActiveLevels] = useState([]);
  const [toolbarWidth, setToolbarWidth] = useState(0);
  const navigationItems = useSelector((state) => state.navigation?.items || []);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveLevels([]);
  };

  const handleMouseEnter = (level, items) => {
    setActiveLevels((prev) => {
      const newLevels = [...prev];
      newLevels[level] = items || [];
      return newLevels.slice(0, Math.min(level + 1, 3));
    });
  };

  const calculateBackgroundColor = (level) => {
    const startColor = 237;
    const endColor = 255;
    const step = Math.floor((endColor - startColor) / 2);
    const colorValue = Math.min(startColor + step * level, endColor);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  useEffect(() => {
    const toolbarElement = document.getElementById('toolbar');
    if (toolbarElement) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setToolbarWidth(entry.contentRect.width);
        }
      });
      resizeObserver.observe(toolbarElement);
      return () => resizeObserver.unobserve(toolbarElement);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveLevels([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className={`menu-hamburger-container ${isOpen ? 'is-active' : ''}`}
    >
      <button className="menu-hamburger-toggler" onClick={toggleMenu}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
      {isOpen && (
        <div
          className="menu-hamburger-content"
          style={{ marginLeft: `${toolbarWidth}px` }}
        >
          <div className="menu-hamburger-levels">
            <ul
              className="menu-hamburger-list"
              style={{ backgroundColor: calculateBackgroundColor(0) }}
            >
              {navigationItems.map((item) => (
                <li
                  key={item.url}
                  className="menu-hamburger-item"
                  onMouseEnter={() => handleMouseEnter(0, item.items || [])}
                >
                  <a href={item.url}>
                    {item.title}
                    {item.items?.length > 0 && (
                      <i class="fa-solid fa-chevron-right"></i>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            {activeLevels.map(
              (levelItems, index) =>
                levelItems.length > 0 && (
                  <ul
                    key={index}
                    className="menu-hamburger-list"
                    style={{
                      backgroundColor: calculateBackgroundColor(index + 1),
                    }}
                  >
                    {levelItems.map((item) => (
                      <li
                        key={item.url}
                        className="menu-hamburger-item"
                        onMouseEnter={() =>
                          handleMouseEnter(index + 1, item.items || [])
                        }
                      >
                        <a href={item.url}>
                          {item.title}
                          {item.items?.length > 0 && (
                            <span className="fa-solid fa-chevron-right"></span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;
