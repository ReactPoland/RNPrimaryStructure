import _get from 'lodash/get';
import { getData as getCocktailsData } from '../../../network/api/cocktails';

export const FETCH_COCKTAILS_DATA = 'FETCH_COCKTAILS_DATA';
export const FETCH_COCKTAILS_DATA_SUCCESS = 'FETCH_COCKTAILS_DATA_SUCCESS';
export const FETCH_COCKTAILS_DATA_ERROR = 'FETCH_COCKTAILS_DATA_ERROR';

export const getCocktails = () => (dispatch, getState) => {
  dispatch({ type: FETCH_COCKTAILS_DATA })
  getCocktailsData()
    .then(data => {
      dispatch({
        type: FETCH_COCKTAILS_DATA_SUCCESS,
        payload: data
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_COCKTAILS_DATA_ERROR,
        payload: error.message
      })
    });
}
