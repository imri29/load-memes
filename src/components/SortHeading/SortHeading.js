import React, { Component } from 'react';
import './sort-heading.scss';
import NavItem from 'react-bootstrap/lib/NavItem';

class SortHeading extends Component {

  render() {
    const { children, onClick } = this.props;
    return (
      <NavItem className="sort-item" onClick={onClick}>
        {children}
      </NavItem>
    )
  }
}

export default SortHeading;
