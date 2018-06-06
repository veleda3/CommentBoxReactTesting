import commentsReducers from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions of type SAVE_COMMENTS', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };
  const newState = commentsReducers([], action)

  expect(newState).toEqual(['new comment'])
});

it('handles action with unknown type', () => {
  const newState = commentsReducers([], { type: 'DJCDHD'});

  expect(newState).toEqual([]);
})
