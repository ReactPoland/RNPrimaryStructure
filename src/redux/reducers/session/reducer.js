import {
  FETCH_COCKTAILS_DATA,
  FETCH_COCKTAILS_DATA_SUCCESS,
  FETCH_COCKTAILS_DATA_ERROR,
} from './actions';

const initialState = () => ({
  cocktails: {
    data: null,
    pending: false,
    error: null
  }
})

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case FETCH_COCKTAILS_DATA:
      return {
        ...state,
        cocktails: { ...state.cocktails, pending: true, error: null }
      }
    case FETCH_COCKTAILS_DATA_SUCCESS:
      return {
        ...state,
        cocktails: { data: action.payload, pending: false }
      }
    case FETCH_COCKTAILS_DATA_ERROR:
      return {
        ...state,
        cocktails: { ...state.cocktails, pending: false, error: action.payload }
      }
    default:
      return state
  }
}
