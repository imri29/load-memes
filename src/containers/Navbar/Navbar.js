import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './navbar.scss';

// Components
import { Spin } from 'react-burgers';

// Actions
import { toggleSidebarView } from '../../actions/index';

const Navbar = ({ isSidebarOpen, toggleSidebarView, categoryName }) => {
  return (
    <div className="navbar">
      <Spin
        color="white"
        active={isSidebarOpen}
        onClick={() => toggleSidebarView(!isSidebarOpen)}
      />
      <h2>{categoryName}</h2> {/*simply renders what's currently in the state*/}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen,
    categoryName: state.category.categoryName,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebarView
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
