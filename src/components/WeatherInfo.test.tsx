import React from 'react';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import WeatherInfo from './WeatherInfo';

describe('WeatherInfo', () => {
  it('render weather element', () => {
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
    const WeatherElement = renderer
      .create(<WeatherInfo info={info} />)
      .toJSON();

    expect(WeatherElement).toMatchSnapshot();
  });
})