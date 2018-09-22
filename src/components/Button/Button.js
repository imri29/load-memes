import React from 'react';
import BSButton from 'react-bootstrap/lib/Button';
import './button.scss';

const Button = ({ onClick, theme, children }) => {

  return (
    <BSButton onClick={onClick} className={theme}>
      {children}
    </BSButton>
  );
};

export default Button;
