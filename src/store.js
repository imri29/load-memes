import { createStore } from 'redux';
import reducers from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(
  reducers,
  persistedState,
  reduxDevtools
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
