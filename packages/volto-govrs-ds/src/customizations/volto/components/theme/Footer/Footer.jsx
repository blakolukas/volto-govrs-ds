import React from 'react';
import { injectIntl } from 'react-intl';
import SiteMapFooter from 'volto-govrs-ds/components/SiteMapFooter/SiteMapFooter';
import RedesSociais from 'volto-govrs-ds/components/RedesSociais/RedesSociais';
import FooterImages from 'volto-govrs-ds/components/FooterImages';
import './Footer.css';

const Footer = ({ images }) => {

  return (
    <div id="footer" color="grey">
      <div className="footer-container">
        <div className="footer-site-nome">
          <img src="/brasao-RS-contraste.svg" alt="" />
        </div>
        <SiteMapFooter location={{ pathname: '/' }} />
        <div className="footer-redes-images">
          <RedesSociais />
          <FooterImages images={images || []} />
        </div>
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
