import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './navbar.scss';

// Components
import { Spin } from 'react-burgers';

// Actions
import { toggleSidebarView } from '../../actions/index';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';

const Navbar = ({ isSidebarOpen, toggleSidebarView, categoryMemes }) => {
  return (
    <div className="navbar">
      <Spin
        color="white"
        active={isSidebarOpen}
        onClick={() => toggleSidebarView(!isSidebarOpen)}
      />
      <CategoryTitle>{categoryMemes === null ? 'aba' : 'ima'}</CategoryTitle>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen,
    categoryMemes: state.category.memes,

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
