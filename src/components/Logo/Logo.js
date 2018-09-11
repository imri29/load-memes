import React from 'react';
import logo from '../../assets/images/logo.png';

import './logo.scss';

// Actions
const Logo = ({ clearMemes, ...rest }) => {

  console.log(...rest);

  return (
    <div className="logo-div">
      <img onClick={clearMemes} className="logo" src={logo} alt="logo" {...rest} />
    </div>
  );
};

export default Logo;
