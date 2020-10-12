import {FILTER_BY_SEARCH, TOGGLE_TAG} from "Store/constants";

export const toggleTag = (id) => {
    return {
        type: TOGGLE_TAG,
        payload: id
    }
};

export const filterBySearch = (term) => {
    return {
        type: FILTER_BY_SEARCH,
        payload: term
    }
};