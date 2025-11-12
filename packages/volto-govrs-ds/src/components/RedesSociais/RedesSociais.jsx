import React from 'react';
import facebook from './facebook.svg';
import insta from './insta.svg';
import flickr from './flickr.svg';
import x from './x.svg';
import youtube from './yt.svg';
import './RedesSociais.css';

const RedesSociais = () => {
  return (
    <div className="redes-container">
      <h1 className="redes-titulo">Redes Sociais</h1>
      <div className="redes">
        <a href="https://www.facebook.com/Procergs">
          <img src='/facebook.svg' alt="facebook" />
        </a>
        <a href="/">
          <img src='/x.svg' alt="x" />
        </a>
        <a href="https://www.youtube.com/user/TVProcergs">
          <img src='/yt.svg' alt="youtube" />
        </a>
        <a href="/">
          <img src='/flickr.svg' alt="flickr" />
        </a>
        <a href="https://www.instagram.com/procergsoficial/">
          <img src='/insta.svg' alt="insta" />
        </a>
      </div>
    </div>
  );
};

export default RedesSociais;
