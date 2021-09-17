import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import {WeatherArea} from 'models/weather';
import configureStore from 'redux-mock-store';

configure({adapter: new Adapter()});

import {WeatherList, default as ConnectWeatherList} from './WeatherList';

describe('WeatherList', () => {
  const props = {
    weatherListByCity: [],
    err: '',
    onSearch: () => {},
    loading: false
  }

  it('render weather list no store', () => {
    const WeatherListElment = renderer
      .create(
          <WeatherList {...props} />
      )
      .toJSON();

    expect(WeatherListElment).toMatchSnapshot();
  });

  it('render weather list with store', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      weatherListByCity: [],
      err: '',
      loading: false
    });

    const WeatherListElment = renderer
      .create(
        <Provider store={store}>
          <ConnectWeatherList {...props} />
        </Provider>
      )
      .toJSON();

    expect(WeatherListElment).toMatchSnapshot();
  })
});