import React from 'react';
import './category-title.scss'

const CategoryTitle = props => {
  return <h1 className="category-title">{props.children}</h1>;
};


export default CategoryTitle;