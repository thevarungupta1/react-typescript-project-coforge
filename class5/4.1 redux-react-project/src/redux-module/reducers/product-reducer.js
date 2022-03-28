import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
