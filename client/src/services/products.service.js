import api from './api.service';

export const getProducts = () => {
  return api.get('/products');
};

export const saveProducts = (data) => {
  return api.post('/products', data);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
