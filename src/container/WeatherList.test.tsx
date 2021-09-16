import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {WeatherArea} from 'models/weather';

configure({adapter: new Adapter()});

import WeatherList from './WeatherList';

test('<WeatherList /> component Unit Test', () => {
  const props = {
    weatherListByCity: [],
    err: '',
    onSearch: () => {},
    loading: false
  }
  // const wrapper = shallow(<WeatherList weatherListByCity={[]} err={''}  onSearch={() => {}} loading={false} />);

  // expect(wrapper.exists()).toEqual(true);
});