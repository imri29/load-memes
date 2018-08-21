import { PUT_MEMES_IN_STORE, ACTIVE_CATEGORY } from '../actions/index';

const initialState = {
  memes: null,
  categoryName: null
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case PUT_MEMES_IN_STORE:
      return {
        memes: payload
      };
    case ACTIVE_CATEGORY:
      return {
        categoryName: payload
      };
    default:
      return state;
  }
}
