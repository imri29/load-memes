import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './memes-grid.scss';

// Components
import MemeThumb from '../../components/MemeThumb/MemeThumb'

/** TODO on hover:
 * X to kick meme out of display
 * show download amount
 */


class MemesGrid extends Component {

  render() {
    const { categoryMemes } = this.props;
    if (!categoryMemes) return null;

    return (
        <div className="memes-container">
          {_.map(categoryMemes, meme => {
            return (
              <MemeThumb
                thumbPath={meme.urlPath}
                key={meme.id}
                description={meme.description}
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
