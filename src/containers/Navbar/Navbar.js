import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import './navbar.scss';

// Components
import { Spin } from 'react-burgers';

// Actions
import { toggleSidebarView, sortMemesByRating } from '../../actions/index';

const Navbar = ({
  isSidebarOpen,
  toggleSidebarView,
  categoryName,
  categoryMemes,
  sortMemesByRating
}) => {

  // const sortByRating = categoryMemes.sort((a, b) => (a.rating < b.rating ? 1 : -1));

  return (
    <div className="navbar-container">
      <div className="box">
        <Spin
          color="#0097EB"
          active={isSidebarOpen}
          onClick={() => toggleSidebarView(!isSidebarOpen)}
        />
      </div>
      <div className="box">
        <h2>{categoryName}</h2>
      </div>
      <div className="box box-sort">
        <h4>מיין לפי:</h4>
        <h4>רגיל</h4>
        <h4 onClick={() => sortMemesByRating(categoryMemes.sort((a, b) => (a.rating < b.rating ? 1 : -1)))}>כמות הורדות</h4>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen,
    categoryName: state.category.categoryName,
    categoryMemes: state.category.memes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebarView,
      sortMemesByRating
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
