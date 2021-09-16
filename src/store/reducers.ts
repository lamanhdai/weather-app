import {WeatherArea} from 'models/weather';
import {AppActions} from './actions';
import {GET_WEATHER_SUCCESS, GET_WEATHER_FAIL} from './actions';

export interface WeatherState {
  weatherListByCity: WeatherArea[]
  err: string
}

export const initialState = {
  weatherListByCity: [],
  err: ''
}

const weatherReducer = (state: WeatherState = initialState, action: AppActions):WeatherState => {
  switch(action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        err: '',
        weatherListByCity: action.payload
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        err: action.payload
      };
    default: return state;
  }
}

export default weatherReducer;
