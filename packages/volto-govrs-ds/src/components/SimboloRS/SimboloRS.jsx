import React, { useState, useEffect } from 'react';
import { UniversalLink } from '@plone/volto/components';
import SimboloRSImg from './preto.png';
import SimboloRSHighContrast from './branco.png';
import './SimboloRS.css';

const SimboloRS = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const target = document.getElementById('main');
    if (!target) return;

    const updateClass = () => {
      setIsHighContrast(target.classList.contains('high-contrast'));
    };

    // Verifica inicialmente
    updateClass();

    // Observa mudanças nas classes
    const observer = new MutationObserver(() => updateClass());

    observer.observe(target, { attributes: true, attributeFilter: ['class'] });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="simboloRS">
      <a href="https://casacivil.rs.gov.br/inicial" target="_self">
        <img
          src={isHighContrast ? SimboloRSHighContrast : SimboloRSImg}
          alt="RS.GOV - Novas façanhas"
          className="simboloRS"
        />
      </a>
    </div>
  );
};

export default SimboloRS;
