import { ADD_FAV, DELETE_FAV } from '../constants/actionTypes';

const addFavReducerFunc = (state, action) => {
 const matches = state.filter(el => el.id === action.payload.id);
 if(matches.length > 0){
   alert("this movie is already in your favorites");
   return state;
 }
 return [...state, action.payload];
}

const deleteFavReducerFunc = (state, action) => {
  return state.filter(el => el.id !== action.payload);
}

export function favoritesReducer(state = [], action) {
 switch(action.type){
  case ADD_FAV:
    // console.log("ADD_FAV", "payload:", action);
   return addFavReducerFunc(state, action);
  case DELETE_FAV:
   return deleteFavReducerFunc(state, action);
  default:
   return state;
 }
}