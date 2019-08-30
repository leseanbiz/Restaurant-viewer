import { NEXT_PAGE, PREVIOUS_PAGE } from '../constants/actionTypes';

export function nextPage(num, query) {
 return { type: NEXT_PAGE, num: num, query: query}
}

export function previousPage(num, query) {
  return { type: PREVIOUS_PAGE, num: num, query: query}
}