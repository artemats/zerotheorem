import {CLOSE_MODAL, OPEN_MODAL} from "../constants";

const initialState = {
  isOpen: false,
  type: null
};

export const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                type: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                type: action.payload
            };
        default:
            return state;
    }

};