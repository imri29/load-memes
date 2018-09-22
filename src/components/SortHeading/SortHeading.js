import React, { Component } from 'react';
import './sort-heading.scss';
import PropTypes from 'prop-types';
import NavItem from 'react-bootstrap/lib/NavItem';

class SortHeading extends Component {
  render() {
    const { children, onClick, active } = this.props;
    return (
      <NavItem
        active={active}
        className={"sort-item" + (active ? "" : '')}
        onClick={onClick}
      >
        {children}
      </NavItem>
    );
  }
}

SortHeading.propTypes = {
  active: PropTypes.bool
};

export default SortHeading;
