import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './meme-thumb.scss';

// Actions
import { removeMemeFromStore } from '../../actions/index';

const MemeThumb = ({
  thumbPath,
  description,
  rating,
  id,
  removeMemeFromStore,
}) => {
  return (
    <div className="meme-thumb__container">
      <img className="meme-thumb__img" src={thumbPath} alt={description} />
      <div className="meme-thumb__overlay" title={description}>
        <span
          onClick={() => removeMemeFromStore(id)}
          className="meme-thumb__times"
          aria-label="times"
        >
          &times;
        </span>
        <span className="meme-thumb__rating">
          <i className="fas fa-download fa-xs" />
          {rating}
        </span>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      removeMemeFromStore
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(MemeThumb);
