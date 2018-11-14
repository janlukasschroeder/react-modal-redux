import { combineReducers } from "redux";

export const registerModal = id => ({
  type: "REGISTER_MODAL",
  id
});

export const showModal = id => ({
  type: "SHOW_MODAL",
  id
});

export const hideModal = id => ({
  type: "HIDE_MODAL",
  id
});

const initialState = {
  // modals: []
  modals: {}
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_MODAL":
      const newModal = {
        id: action.id,
        visible: false
      };
      return {
        ...state,
        modals: { ...state.modals, [action.id]: newModal }
      };
    case "SHOW_MODAL":
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.id]: { ...state.modals[action.id], visible: true }
        }
      };
    case "HIDE_MODAL":
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.id]: { ...state.modals[action.id], visible: false }
        }
      };
    default:
      return state;
  }
};

export default combineReducers({
  modals
});
