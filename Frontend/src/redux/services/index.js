import product from './product.service';
export const API_URL = 'http://localhost:3001';
export const MEDIA_URL = 'http://localhost:3001/';
export default {
  product: product(API_URL),
};
