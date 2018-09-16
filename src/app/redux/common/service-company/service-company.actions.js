import {SET_SERVICE} from "./constants";

export function setService(data) {
  return {
    type: 'SET_SERVICE',
    data
  }
}