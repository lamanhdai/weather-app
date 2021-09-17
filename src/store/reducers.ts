import {WeatherArea} from 'models/weather';
import {AppActions} from './actions.type';
import {GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL} from './actions.type';

export interface WeatherState {
  weatherListByCity: WeatherArea[]
  err: string
  loading: boolean
}

export const initialState = {
  weatherListByCity: [],
  err: '',
  loading: false
}

const weatherReducer = (state: WeatherState = initialState, action: AppActions):WeatherState => {
  switch(action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        err: '',
        loading: true
      };
    case GET_WEATHER_SUCCESS:
      return {
        err: '',
        weatherListByCity: action.payload,
        loading: false
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        err: action.payload,
        loading: false
      };
    default: return state;
  }
}

export default weatherReducer;
