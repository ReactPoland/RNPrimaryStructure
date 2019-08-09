import _get from 'lodash/get';
import _isArray from 'lodash/isArray';
import _isPlainObject from 'lodash/isPlainObject';
import api from './index';

const dataValidator = data => {
  const isArray = _isArray(data)
  if (!isArray) throw Error('Data is not valid');
  const isWrongObject = data.some(item => !_isPlainObject(item))
  if (isWrongObject) throw Error("Data is not valid");
};

export const getData = async () => {
  const response = await api.getCocktailGlassData()
  const data = _get(response, 'data.drinks', [])
  dataValidator(data)
  return data
};