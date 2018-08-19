import { combineReducers } from 'redux';

import sidebarReducer from './sidebar_reducer';
import categoryReducer from './category_reducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  category: categoryReducer,
});

// whatever I decide to name the key is how I will refer to it
// all over my application

export default rootReducer;
