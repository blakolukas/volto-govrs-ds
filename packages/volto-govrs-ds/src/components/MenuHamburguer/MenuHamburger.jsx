import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './MenuHamburger.css';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLevels, setActiveLevels] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [toolbarWidth, setToolbarWidth] = useState(0);
  const navigationItems = useSelector((state) => state.navigation?.items || []);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveLevels([]);
    setExpandedItems({});
  };

  const handleMouseEnter = (level, items) => {
    if (!isMobile) {
      setActiveLevels((prev) => {
        const newLevels = [...prev];
        newLevels[level] = items || [];
        return newLevels.slice(0, Math.min(level + 1, 4));
      });
    }
  };

  const toggleExpanded = (itemUrl) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemUrl]: !prev[itemUrl],
    }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        setExpandedItems({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderMobileMenuItem = (item, level = 0) => {
    const hasChildren = item.items && item.items.length > 0;
    const isExpanded = expandedItems[item.url];
    const levelClass = level === 0 ? '' : level % 2 === 0 ? 'level-even' : 'level-odd';

    return (
      <li key={item.url} className="menu-hamburger-item">
        <div className={`menu-hamburger-item-content ${levelClass}`}>
          <Link to={item.url} className="menu-hamburger-link">
            {item.title}
          </Link>
          {hasChildren && (
            <button
              className="menu-hamburger-expand-button"
              onClick={(e) => {
                e.preventDefault();
                toggleExpanded(item.url);
              }}
            >
              <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} />
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <ul className="menu-hamburger-submenu">
            {item.items.map((subItem) => renderMobileMenuItem(subItem, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div
      ref={menuRef}
      className={`menu-hamburger-container ${isOpen ? 'is-active' : ''}`}
    >
      <button className="menu-hamburger-toggler" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>
      {isOpen && (
        <div className="menu-hamburger-content">
          {isMobile ? (
            <ul className="menu-hamburger-list menu-hamburger-mobile">
              {navigationItems.map((item) => renderMobileMenuItem(item))}
            </ul>
          ) : (
            <div className="menu-hamburger-levels">
              <ul className="menu-hamburger-list level-even">
                {navigationItems.map((item) => (
                  <li
                    key={item.url}
                    className="menu-hamburger-item"
                    onMouseEnter={() => handleMouseEnter(0, item.items || [])}
                  >
                    <Link to={item.url}>
                      {item.title}
                      {item.items?.length > 0 && (
                        <FontAwesomeIcon icon={faChevronRight} />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              {activeLevels.map(
                (levelItems, index) =>
                  levelItems.length > 0 && (
                    <ul
                      key={index}
                      className={`menu-hamburger-list ${
                        (index + 1) % 2 === 0 ? 'level-even' : 'level-odd'
                      }`}
                    >
                      {levelItems.map((item) => (
                        <li
                          key={item.url}
                          className="menu-hamburger-item"
                          onMouseEnter={() =>
                            handleMouseEnter(index + 1, item.items || [])
                          }
                        >
                          <Link to={item.url}>
                            {item.title}
                            {item.items?.length > 0 && (
                              <FontAwesomeIcon icon={faChevronRight} />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ),
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;
