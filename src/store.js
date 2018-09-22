import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(logger))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
