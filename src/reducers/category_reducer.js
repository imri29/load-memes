import { PUT_MEMES_IN_STORE, CHANGE_ACTIVE_CATEGORY } from '../actions/index';

const initialState = {
  memes: {},
  categoryName: 'דף הבית'
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case PUT_MEMES_IN_STORE:
      return {
        ...state,
        memes: payload
      };
    case CHANGE_ACTIVE_CATEGORY:
      return {
        ...state,
        categoryName: payload
      };
    default:
      return state;
  }
}
