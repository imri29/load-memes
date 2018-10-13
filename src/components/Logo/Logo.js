import React from 'react';
import logo from '../../assets/images/logo.png';

import './logo.scss';

// Actions
const Logo = ({ onClick, title }) => {
  return (
    <div className="logo-div">
      <img onClick={onClick} className="logo" src={logo} alt="logo" title={title} />
    </div>
  );
};

export default Logo;
