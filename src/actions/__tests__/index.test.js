import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';


describe('it saves comment', () => {

  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT)
  });


  it('has the correct payload', () => {
    const action = saveComment('first comment');

    expect(action.payload).toEqual('first comment')

  });

});
