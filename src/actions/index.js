export const TOGGLE_SIDEBAR_VIEW = 'TOGGLE_SIDEBAR_VIEW';

export function toggleSidebarView(isOpen) {
  return {
    type: TOGGLE_SIDEBAR_VIEW,
    payload: isOpen
  };
}

export const PUT_MEMES_IN_STORE = 'PUT_MEMES_IN_STORE';

export function putMemesInStore(response) {

  return {
    type: PUT_MEMES_IN_STORE,
    payload: response
  };
}
