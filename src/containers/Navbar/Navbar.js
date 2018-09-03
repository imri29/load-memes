import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SortHeading from '../../components/SortHeading/SortHeading';
import './navbar.scss';

// Components
import { Spin } from 'react-burgers';

// Actions
import {
  toggleSidebarView,
  sortMemesByRating,
  sortMemesById
} from '../../actions/index';

const Navbar = ({
  isSidebarOpen,
  toggleSidebarView,
  categoryName,
  memes,
  sortMemesByRating,
  sortMemesById
}) => {

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
        <SortHeading onClick={() => sortMemesById(memes)} eventKey={1}>
          רגיל
        </SortHeading>
        <SortHeading onClick={() => sortMemesByRating(memes)} eventKey={2}>
          כמות הורדות
        </SortHeading>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.sidebar.isOpen,
    categoryName: state.category.categoryName,
    memes: state.category.memes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebarView,
      sortMemesByRating,
      sortMemesById
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
