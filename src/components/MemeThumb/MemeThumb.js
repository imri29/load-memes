import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './meme-thumb.scss';

// Actions
import { removeMemeFromStore } from '../../actions/index';

const MemeThumb = ({
  thumbPath,
  description,
  removeMemeFromStore,
  categoryMemes
}) => {
/*
  // try something with display:none
  const removeMeme = meme => {
   const filter = _.filter(categoryMemes, el => el.style.display = 'none'); // not good, mutates state directly.
   removeMemeFromStore(filter);
  };*/

  return (
    <div className="meme-thumb__container">
      <img className="meme-thumb__img" src={thumbPath} alt={description} />
      <div className="meme-thumb__overlay" title={description}>
        <span
          // onClick={removeMeme}
          className="meme-thumb__times"
          aria-label="times"
        >
          &times;
        </span>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categoryMemes: state.category.memes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      removeMemeFromStore
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeThumb);
