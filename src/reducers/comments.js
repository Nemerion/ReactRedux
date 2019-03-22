import { SAVE_COMMENT } from '../actions/types';

export default function vevo(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return Object.assign([], state, [
        action.payload
      ]);
    default:
      return state;
  }
}