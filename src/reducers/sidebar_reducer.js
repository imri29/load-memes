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
      return state; // previous state
  }
}
