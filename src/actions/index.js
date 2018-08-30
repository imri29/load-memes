export const TOGGLE_SIDEBAR_VIEW = 'TOGGLE_SIDEBAR_VIEW';
export const PUT_MEMES_IN_STORE = 'PUT_MEMES_IN_STORE';
export const CHANGE_ACTIVE_CATEGORY = 'CHANGE_ACTIVE_CATEGORY';
export const REMOVE_MEME_FROM_STORE = 'REMOVE_MEME_FROM_STORE';
export const CLEAR_MEMES_FROM_DISPLAY = 'CLEAR_MEMES_FROM_DISPLAY';
export const SORT_MEMES_BY_RATING = 'SORT_MEMES_BY_RATING';

export function toggleSidebarView(isOpen) {
  return {
    type: TOGGLE_SIDEBAR_VIEW,
    payload: isOpen
  };
}

export function putMemesInStore(response) {
  return {
    type: PUT_MEMES_IN_STORE,
    payload: response
  };
}
export function changeActiveCategory(currentCategory) {
  return {
    type: CHANGE_ACTIVE_CATEGORY,
    payload: currentCategory
  };
}
export function removeMemeFromStore(id) {
  return {
    type: REMOVE_MEME_FROM_STORE,
    payload: id
  };
}

export function clearMemesFromDisplay() {
  return {
    type: CLEAR_MEMES_FROM_DISPLAY
  };
}

export function sortMemesByRating(sortingFunction) {
  return {
    type: SORT_MEMES_BY_RATING,
    payload: sortingFunction
  };
}
