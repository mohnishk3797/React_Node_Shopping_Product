import { SET_PRODUCT_DATA, UPDATE_PRODUCT_DATA } from '../actionTypes';
const initialState = {
  product: {
    docs: [],
    page: 1,
    pages: 1,
    total: 3,
  },
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return {
        ...state,
        product: action.payload,
      };
    case UPDATE_PRODUCT_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
