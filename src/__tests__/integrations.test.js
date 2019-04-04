import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';
import { BrowserRouter, Route } from 'react-router-dom';

// beforeEach(() => {
//   moxios.install();
//   moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
//     status: 200,
//     response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
//   });
// });

// afterEach(() => {
//   moxios.uninstall();
// });

// it('can fetch a list of comments and display them', (done) => {
//   // Attempt to render the *entire* app
//   const wrapped = mount(
//     <Root>
//       <BrowserRouter>
//         <Route path="/" component={App} />
//       </BrowserRouter>
//     </Root>
//   );

//   // find the 'fetchComments' button and click it
//   wrapped.find('.fetch-comments').simulate('click');

//   // introduce a TINY little pause
//   moxios.wait(() => {
//     wrapped.update();

//     expect(wrapped.find('li').length).toEqual(2);

//     done();
//     wrapped.unmount();
//   });

//   // Expect to find a list of comments!
// });
