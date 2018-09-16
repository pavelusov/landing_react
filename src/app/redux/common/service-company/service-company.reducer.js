import {SET_SERVICE} from "./constants";

import initialState from './services';

export default function services(state = initialState, action) {
  switch (action.type) {
    case SET_SERVICE:
      return [ ...action.data];
    default:
      return state;
  }
}