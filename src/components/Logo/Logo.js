import React from 'react';
import logo from '../../assets/images/logo.png';

import './logo.scss';

// Actions
const Logo = ({ clearMemes }) => {

  return (
    <div className="logo-div">
      <img onClick={clearMemes} className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
