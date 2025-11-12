import React from 'react';
import { injectIntl } from 'react-intl';
import SiteMapFooter from 'volto-govrs-ds/components/SiteMapFooter/SiteMapFooter';
import RedesSociais from 'volto-govrs-ds/components/RedesSociais/RedesSociais';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer" color="grey">
      <div className="footer-container">
        <div className="footer-site-nome">
          <img src="/brasao-RS-contraste.svg" alt="" />
        </div>
        <SiteMapFooter location={{ pathname: '/' }} />
        <RedesSociais />
      </div>
      <div className="footer-logo">
        <p>
          Texto destinado a exibição das informações relacionadas à <a href="#">licença de uso</a>. 
        </p>
      </div>
    </div>
  );
};

export default injectIntl(Footer);
