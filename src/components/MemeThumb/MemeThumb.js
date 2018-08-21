import React from 'react';
import './meme-thumb.scss';

const MemeThumb = ({thumbPath, description}) => {
  return (
    <div className="meme-thumb__container">
      <img className="meme-thumb__img" src={thumbPath} alt={description} />
      <div className="meme-thumb__overlay" />

      {/*<p>{numOfDownloads}</p>*/}
      <span className="meme-thumb__times" role="img" aria-label="times">❌</span>
      <p>{description}</p>
    </div>
  );
};

export default MemeThumb;
