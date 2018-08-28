import React from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import axios from 'axios';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './sidebar-item.scss';

// Actions
import {
  changeActiveCategory,
  putMemesInStore,
  toggleSidebarView
} from '../../actions';

const SidebarItem = ({
  title,
  changeActiveCategory,
  icon,
  urlTitle,
  putMemesInStore,
  isSidebarOpen,
  toggleSidebarView
}) => {
  const getCategoryMemes = () => {
    const ROOT_URL = 'http://www.memeking.co.il/api/category?category=';
    const url = `${ROOT_URL}${urlTitle}`;
    axios
      .get(url)
      .then(response => putMemesInStore(_.toArray(response.data)))
      .catch(error => console.error(error));
  };

  return (
    <ListGroupItem
      onClick={() => {
        getCategoryMemes();
        toggleSidebarView(!isSidebarOpen);
        changeActiveCategory(title);
      }}
      className="sidebar-item"
    >
      {title}
      <img className="sidebar-icon" src={icon} alt="icon" />
    </ListGroupItem>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeActiveCategory,
      putMemesInStore,
      toggleSidebarView
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarItem);
