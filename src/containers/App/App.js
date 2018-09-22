import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Components
import Sidebar from '../../containers/Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import MemesGrid from '../MemesGrid/MemesGrid';

// Actions
import { clearMemesFromDisplay, toggleSidebarView } from '../../actions/index';

class App extends Component {
  render() {
    const {
      isSidebarOpen,
      toggleSidebarView,
      clearMemesFromDisplay,
      memes
    } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <Logo onClick={() => clearMemesFromDisplay()} />
        {_.isEmpty(memes) && (
          <Button
            theme="transparent"
            block
            onClick={() => toggleSidebarView(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'סגור קטגוריות' : 'טען קטגוריות'}
          </Button>
        )}
        <MemesGrid />
        <Sidebar />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen,
    memes: state.category.memes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebarView,
      clearMemesFromDisplay
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
