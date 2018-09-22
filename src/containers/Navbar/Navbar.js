import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './navbar.scss';

// Components
import { Spin } from 'react-burgers';
import SortHeading from '../../components/SortHeading/SortHeading';

// Actions
import {
  toggleSidebarView,
  sortMemesByRating,
  sortMemesByDate
} from '../../actions/index';

const Navbar = ({
  isSidebarOpen,
  toggleSidebarView,
  categoryName,
  memes,
  sortMemesByRating,
  sortMemesByDate,
  filterType
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
        <SortHeading
          active={filterType === 'date'}
          onClick={() => sortMemesByDate()}
        >
          תאריך
        </SortHeading>
        <SortHeading
          active={filterType === 'rating'}
          onClick={() => sortMemesByRating()}
        >
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
    filterType: state.category.filterType
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebarView,
      sortMemesByRating,
      sortMemesByDate
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
