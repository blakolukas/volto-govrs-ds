import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import config from '@plone/volto/registry';
import { toBackendLang } from '@plone/volto/helpers';

import './SiteMapFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function SitemapFooter({ lang, intl }) {
  const [openItems, setOpenItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const { settings } = config;
    const language = settings.isMultilingual ? toBackendLang(lang) : null;
    const path = language || '';
   
    const apiPath = path ? `/${path}` : '';
    fetch(`${apiPath}/++api++/@navigation?expand.navigation.depth=4`)
      .then(response => response.json())
      .then(data => {
        if (data.items) {
          setItems(data.items);
        }
      })
      .catch(error => {
        console.error('SiteMapFooter: Error fetching navigation:', error);
      });
  }, [lang]);

  const toggleAccordion = (itemTitle) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemTitle)
        ? prevOpenItems.filter((title) => title !== itemTitle)
        : [...prevOpenItems, itemTitle]
    );
  };

  const getRelativePath = (url) => {
    if (!url) return '/';
    try {
      const urlObj = new URL(url);
      return urlObj.pathname;
    } catch {
      return url || '/';
    }
  };

  const renderItems = (items) => (
    <ul className="rodape__mapa-site">
      {items.map((item) => (
        <React.Fragment key={item.title}>
          {item.items && item.items.length > 0 && (
            <li className={`rodape__mapa-site__item ${openItems.includes(item.title) ? 'accordion-open' : ''}`} onClick={() => toggleAccordion(item.title)}>
              <div className="rodape__mapa-site__header">
                <Link to={getRelativePath(item.url || item['@id'])} className="rodape-titulo">
                  {item.title}
                </Link>
                <button
                  className="accordion-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(item.title);
                  }}
                  aria-expanded={openItems.includes(item.title)}
                  aria-label={`Toggle ${item.title} menu`}
                >
                  <span className="accordion-icon" onClick={()=> toggleAccordion(item.title)}>{openItems.includes(item.title) ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </button>
              </div>
              <ul className="accordion-content">
                {item.items.map((innerItem) => (
                  <li key={innerItem.title}>
                    <Link to={getRelativePath(innerItem.url || innerItem['@id'])}>{innerItem.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );

  return (
    <div className="view-wrapper">
      {items && renderItems(items)}
    </div>
  );
}

SitemapFooter.propTypes = {
  lang: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(
  connect((state) => ({
    lang: state.intl.locale,
  }))(SitemapFooter),
);
