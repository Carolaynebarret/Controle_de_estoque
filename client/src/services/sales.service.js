import api from './api.service';

export const getSales = () => {
  return api.get('/sales');
};
