import { PUT_MEMES_IN_STORE } from '../actions/index';

const initialState = {
  memes: null
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case PUT_MEMES_IN_STORE:
      return {
        memes: payload
      };
    default:
      return state;
  }
}
