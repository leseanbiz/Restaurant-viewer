import { ADD_DETAILS } from '../constants/actionTypes';


const INIT_DETAILS_STATE = {}

const addDetailsReducerFunc = (state, action) => Object.assign({}, state, action.payload);

export function detailsReducer(state = INIT_DETAILS_STATE, action) {
  switch (action.type) { 
    case ADD_DETAILS:
      return addDetailsReducerFunc(state, action);
    default:
      return state; 
  }
}
