import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import _ from 'lodash';
import { connect } from 'react-redux';
import './sidebar.scss';

// Components
import SidebarItem from '../SideBarItem/SidebarItem';
import menu from '../../constants/menu';


class Sidebar extends Component {

  render() {
    const { isSidebarOpen } = this.props;
    if (!isSidebarOpen) return null;

    return (
        <ListGroup bsClass="sidebar">
          {_.map(menu, item => {
            return (
              <SidebarItem
                key={item.name}
                title={item.name}
                icon={item.icon}
                urlTitle={item.urlTitle}
              />
            );
          })}
          <ListGroup bsClass="sidebar-filler" />
        </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen
  };
}

export default connect(mapStateToProps)(Sidebar);
