import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './memes-grid.scss';

// Components
import MemeThumb from '../../components/MemeThumb/MemeThumb';

class MemesGrid extends Component {
  render() {
    const { categoryMemes, putMemesInStore } = this.props;
    if (putMemesInStore && !categoryMemes) return <p>Loading...</p>;

    return (
      <div className="memes-container">
        {_.map(categoryMemes, meme => {
          return (
            <MemeThumb
              thumbPath={meme.urlPath}
              key={meme.id}
              id={meme.id}
              description={meme.description}
              rating={meme.rating}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryMemes: state.category.memes
  };
}

export default connect(mapStateToProps)(MemesGrid);
