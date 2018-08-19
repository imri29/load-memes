import React from 'react';
import logo from '../../assets/images/logo.png';
import './logo.scss';

const Logo = props => {
  return (
    <div className="logo-div">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
