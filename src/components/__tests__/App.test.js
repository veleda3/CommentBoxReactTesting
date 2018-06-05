import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows the comment box', () => {
expect(wrapped.find(CommentBox).lenght).toEqual(1);

});

it('shows the comment list', () => {
expect(wrapped.find(CommentList).lenght).toEqual(1);

});
