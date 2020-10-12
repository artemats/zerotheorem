import {TOGGLE_TAG} from "Store/constants";

export const toggleTag = (id) => {
    return {
        type: TOGGLE_TAG,
        payload: id
    }
};