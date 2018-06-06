import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'root';

let wrapped

beforeEach(() => {
  const innitialState = {
    comments: [ 'first comment', 'second comment']
  }
  wrapped = mount(
    <Root innitialState={innitialState}>
      <CommentList />
    </Root>
  );

});
it('creates comments with li', () => {

expect(wrapped.find('li').length).toEqual(2)
})

it('shows all the test on the li', () => {
  expect(wrapped.render().text()).toContain('first comment')
  expect(wrapped.render().text()).toContain('second comment')
})
