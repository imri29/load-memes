import React from 'react';
import BSButton from 'react-bootstrap/lib/Button';
import './button.scss';
import { connect } from 'react-redux';

const Button = ({ onClick, theme, children, categoryName, }) => {
  if (categoryName !== 'דף הבית') return null;


  return (
    <BSButton onClick={onClick} className={theme}>
      {children}
    </BSButton>
  );
};

function mapStateToProps(state) {
  return {
    categoryName: state.category.categoryName
  };
}

export default connect(mapStateToProps)(Button);
