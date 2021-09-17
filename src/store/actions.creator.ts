import {WeatherArea} from 'models/weather';
import {GET_CITY,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  getWeatherRequestAction,
  getCityAction,
  getWeatherSuccessAction,
  getWeatherFailAction
} from './actions.type';

export const getWeatherRequest = (city: string): getWeatherRequestAction => ({
  type: GET_WEATHER_REQUEST,
  payload: city
})

export const getCity = (payload: string): getCityAction => ({
  type: GET_CITY,
  payload: payload
})

export const getWeatherSuccess = (payload: WeatherArea[]): getWeatherSuccessAction => ({
  type: GET_WEATHER_SUCCESS,
  payload: payload
})

export const getWeatherFail = (error: string): getWeatherFailAction => ({
  type: GET_WEATHER_FAIL,
  payload: error
})

export type AppActions = getWeatherRequestAction|getWeatherSuccessAction|getWeatherFailAction|getCityAction