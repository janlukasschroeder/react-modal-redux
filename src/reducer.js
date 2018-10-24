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
  modals: []
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_MODAL":
      const newModal = {
        id: action.id,
        visible: false
      };
      console.log("REGISTER_MODAL", newModal);

      return {
        ...state,
        modals: [...state.modals, newModal]
      };
    case "SHOW_MODAL":
      const newModalsA = state.modals.map(modal => {
        if (modal.id === action.id) {
          modal.visible = true;
        }
        return modal;
      });
      console.log("SHOW_MODAL", newModalsA);
      return {
        ...state,
        modals: newModalsA
      };
    case "HIDE_MODAL":
      const newModalsB = state.modals.map(modal => {
        if (modal.id === action.id) {
          modal.visible = false;
        }
        return modal;
      });
      return {
        ...state,
        modals: newModalsB
      };
    default:
      return state;
  }
};

export default combineReducers({
  modals
});
