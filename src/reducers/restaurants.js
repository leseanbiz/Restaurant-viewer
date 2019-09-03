import { ADD_RESTAURANTS, SORT_RESTAURANTS, FILTER_RESTAURANTS } from '../constants/actionTypes';
import orderBy from 'lodash/orderBy';

const INIT_STATE = {
  restaurants: [],
  filtered: [],
  loading: true,
  filterType: "All",
  types: [],
}

const addRestaurantsReducerFunc = (state, action) => {
  return {...state, restaurants: action.payload, types: action.types, loading: false}
}

const sortRestaurantsReducerFunction = (state, action) => {
  const sortValue = action.payload.split(" ");
  return {...state, 
            restaurants: orderBy(state.restaurants, sortValue[sortValue.length - 1]),
            filtered: orderBy(state.filtered, sortValue[sortValue.length - 1]),
          };
}

const filterRestaurantsReducerFunc = (state, action) => {
  const filteredState = state.restaurants.filter(el => el.type === action.payload)
  return {...state, filtered: filteredState, filterType: action.payload}
}

export function restaurantsReducer(state = INIT_STATE, action) {
 switch (action.type) {
  case ADD_RESTAURANTS:
    return addRestaurantsReducerFunc(state, action);
  case SORT_RESTAURANTS:
    return sortRestaurantsReducerFunction(state, action);
  case FILTER_RESTAURANTS:
    return filterRestaurantsReducerFunc(state, action);
  default:
   return state;
  }
}

