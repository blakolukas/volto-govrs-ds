import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Container as SemanticContainer } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import config from '@plone/volto/registry';
import { getNavigation } from '@plone/volto/actions';
import { toBackendLang } from '@plone/volto/helpers';

import './SiteMapFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function getSitemapPath(pathname = '', lang) {
  const prefix = pathname.replace(/\/sitemap$/gm, '').replace(/^\//, '');
  const path = prefix || lang || '';
  return path;
}

function SitemapFooter({ items, lang, getNavigation, intl }) {
  const location = useLocation();
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    const { settings } = config;
    const language = settings.isMultilingual ? toBackendLang(lang) : null;
    const path = getSitemapPath(location.pathname, language);
    getNavigation(path, 4);
  }, [location.pathname, lang, getNavigation]);

  const toggleAccordion = (itemTitle) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemTitle)
        ? prevOpenItems.filter((title) => title !== itemTitle)
        : [...prevOpenItems, itemTitle]
    );
  };

  const renderItems = (items) => (
    <ul className="rodape__mapa-site">
      {items.map((item) => (
        <React.Fragment key={item.title}>
          {item.items.length > 0 && (
            <li className={`rodape__mapa-site__item ${openItems.includes(item.title) ? 'accordion-open' : ''}`} onClick={() => toggleAccordion(item.title)}>
              <div className="rodape__mapa-site__header">
                <Link to={item.url} className="rodape-titulo">
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
                    <Link to={innerItem.url}>{innerItem.title}</Link>
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
  getNavigation: PropTypes.func.isRequired,
  items: PropTypes.array,
  lang: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

SitemapFooter.defaultProps = {
  items: [],
};

export default injectIntl(
  connect(
    (state) => ({
      items: state.navigation.items,
      lang: state.intl.locale,
    }),
    { getNavigation },
  )(SitemapFooter),
);
