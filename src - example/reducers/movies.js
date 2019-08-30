import { ADD_MOVIES } from '../constants/actionTypes';
import get from 'lodash/get';

const INIT_MOVIES_STATE = []

const addMoviesReducerFunc = (state, action) => (
  Object.assign({}, state, 
    {
      page: get(action.payload, 'page', 1), 
      total_results: get(action.payload, 'total_results', 0), 
      total_pages: get(action.payload, 'total_pages', 0), 
      results: get(action.payload, 'results', [])
    }
  )
)
export function moviesReducer(state = INIT_MOVIES_STATE, action) {
 switch (action.type) {
  case ADD_MOVIES:
    return addMoviesReducerFunc(state, action);
  default:
   return state;
  }
}
