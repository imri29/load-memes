import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './memes-grid.scss';

class MemesGrid extends Component {
  render() {
    const { categoryMemes } = this.props;
    if (!categoryMemes) return null;

    return (
      <ul>
        {_.map(categoryMemes, item => {
          return (
            <img
              className="meme-box"
              src={item.urlPath}
              alt={item.description}
              key={item.id}
            />
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryMemes: state.category.memes
  };
}

export default connect(mapStateToProps)(MemesGrid);
