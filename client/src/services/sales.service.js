import api from './api.service';

export const getSales = () => {
  return api.get('/sales');
};

export const saveSale = (data) => {
  return api.post('/sales', data);
};
