// SemanticUI-free pre-@plone/components
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SimboloRS from '../SimboloRS/SimboloRS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

import {
  Anontools,
  LanguageSelector,
  UniversalLink,
} from '@plone/volto/components';

import SecretariaNome from '../SecretariaNome/SecretariaNome';
import SearchWidget from '../SearchWidget/SearchWidget';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import MenuHamburger from '../MenuHamburguer/MenuHamburger';

const HeaderContainer = ({
  pathname,
  siteLabel,
  token,
  siteAction,
  siteTitle,
  normalImg,
  contrastImg,
}) => {
  const [searchActive, setSearchActive] = useState(false);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="header">
        <div className="tools-wrapper">
          {siteLabel && (
            <div className="intranet">
              <p>{siteLabel}</p>
            </div>
          )}
        </div>
        <div className="logo-nav-wrapper">
          <div className={`simbolo ${searchActive ? 'hidden' : ''}`}>
            <MenuHamburger />
            <SimboloRS normalImg={normalImg} contrastImg={contrastImg} />
            <a className="header-titulo" href="/">
              {siteTitle}
            </a>
          </div>
          <div className={`search-wrapper navigation-desktop ${searchActive ? 'active' : ''}`}>
            <div className="search">
              <SearchWidget
                active={searchActive}
                onToggle={setSearchActive}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <a
            href="#main"
            onClick={handleScrollToTop}
            className="btn-scroll"
            style={{
              cursor: 'pointer',
              padding: '25px 29px',
              color: '#fff',
              backgroundColor: 'var(--green-rs-60)',
              borderRadius: '50px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
              border: '3px solid transparent',
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderContainer;
