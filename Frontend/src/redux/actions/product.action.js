import { SET_PRODUCT_DATA, UPDATE_PRODUCT_DATA } from '../actionTypes';

export const setProductData = (payload) => ({
  type: SET_PRODUCT_DATA,
  payload,
});
export const UpdateProductData = (payload) => ({
  type: UPDATE_PRODUCT_DATA,
  payload,
});
