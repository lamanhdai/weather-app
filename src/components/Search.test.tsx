import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Search from './Search';

test('<Search /> component Unit Test', () => {
  const wrapper = shallow(<Search onSearch={(keyword: string) => {}} />);

  expect(wrapper.exists()).toEqual(true);
});