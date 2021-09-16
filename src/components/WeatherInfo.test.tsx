import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import WeatherInfo from './WeatherInfo';

test('<WeatherInfo /> component Unit Test', () => {
  const info = {
    id: '',
    weather_state_name: '',
    weather_state_abbr: '',
    wind_direction_compass: '',
    applicable_date: '',
    min_temp: 0,
    max_temp: 0,
    the_temp: 0,
    wind_speed: 0,
    wind_direction: 0,
    air_pressure: 0,
    humidity: 0,
    visibility: 0,
    predictability: ''
  }
  const wrapper = shallow(<WeatherInfo info={info} />);

  expect(wrapper.exists()).toEqual(true);
});