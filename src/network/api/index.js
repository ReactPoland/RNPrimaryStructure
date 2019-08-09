import axios from 'axios';
import queryString from 'query-string';

const apiVersion = '/api/json/v1/';
const host = "http://www.thecocktaildb.com" + apiVersion;

const customAxios = axios.create({
  baseURL: host,
  timeout: 5000
})

const createApiUrl = (pathArr, query) => {
  const stringified = queryString.stringify(query)
  let queryUrl = `${host}/${pathArr.join('/')}`
  if (stringified.length) queryUrl += '?' + stringified
  return queryUrl
}

const api = {
  getCocktailGlassData() {
    return customAxios({
      requestId: 'getCocktailGlassData',
      method: 'get',
      url: createApiUrl(['1', 'filter.php'], { g: 'Cocktail_glass' })
    })
  }
}

export default api
