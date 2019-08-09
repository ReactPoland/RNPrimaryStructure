import _get from 'lodash/get';
import api from './index';

export const getData = async () => {
  const response = await api.getCocktailGlassData()
  const data = _get(response, 'data.drinks', [])
  return data
};
