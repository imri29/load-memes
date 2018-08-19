// Reducer is a function that returns a piece of the application state.
// We (currently) want to store two different things:
// - the visibility on the sidebar
// the list of memes
// Reducers specify how the application's state changes in response to actions sent to the store

import { TOGGLE_SIDEBAR_VIEW } from '../actions';

const initialState = {
  isOpen: false
};

export default function(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case TOGGLE_SIDEBAR_VIEW:
      return {
        isOpen: payload
      };
    default:
      return state;
  }
}
