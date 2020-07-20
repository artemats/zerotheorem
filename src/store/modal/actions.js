import {CLOSE_MODAL, OPEN_MODAL} from "../constants";

export const openModal = (modal) => {
  return {
      type: OPEN_MODAL,
      payload: modal
  }
};

export const closeModal = (modal) => {
  return {
      type: CLOSE_MODAL,
      payload: modal
  }
};