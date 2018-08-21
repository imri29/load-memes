import { combineReducers } from 'redux';

import sidebarReducer from './sidebar_reducer';
import categoryReducer from './category_reducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  category: categoryReducer
});

export default rootReducer;
