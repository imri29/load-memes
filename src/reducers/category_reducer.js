import _ from 'lodash';
import {
  PUT_MEMES_IN_STORE,
  CHANGE_ACTIVE_CATEGORY,
  REMOVE_MEME_FROM_STORE,
  CLEAR_MEMES_FROM_DISPLAY,
  SORT_MEMES_BY_RATING,
  SORT_MEMES_BY_ID
} from '../actions/index';

const initialState = {
  memes: null,
  categoryName: 'דף הבית'
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  console.log(action);

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
    case REMOVE_MEME_FROM_STORE:
      return {
        ...state,
        memes: _.omit(state.memes, payload)
      };
    case CLEAR_MEMES_FROM_DISPLAY:
      return {
        ...initialState
      };
    case SORT_MEMES_BY_RATING:
      return {
        ...state,
        memes: _.chain(payload)
          .orderBy('rating', 'desc')
          .value()
      };
    case SORT_MEMES_BY_ID:
      return {
        ...state,
        memes: payload // How to 'Undo'?
      };
    default:
      return state;
  }
}
