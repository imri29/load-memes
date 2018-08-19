import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import { Spin } from 'react-burgers';

// Actions
import { toggleSidebarView } from '../../actions/index';


const Navbar = ({ isSidebarOpen, toggleSidebarView }) => {
  return (
    <div className="navbar">
      <Spin
        color="white"
        active={isSidebarOpen}
        onClick={() => toggleSidebarView(!isSidebarOpen)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen
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
