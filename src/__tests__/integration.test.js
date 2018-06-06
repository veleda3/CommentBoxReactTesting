import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'root';
import App from 'components/App';

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'first comment'}, {name: 'second comment'}]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('it can fetch a list of comments and display them', (done) => {

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click')

  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  })

})
