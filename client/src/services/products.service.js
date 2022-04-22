import api from './api.service';

export const getProducts = () => {
  return api.get('/products');
};
