import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE__COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with uknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});