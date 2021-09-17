import {WeatherArea} from 'models/weather'
export const GET_CITY = 'GET_CITY';
export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';

export interface getWeatherRequestAction {
  type: typeof GET_WEATHER_REQUEST
  payload: string
}

export interface getCityAction {
  type: typeof GET_CITY,
  payload: string
}

export interface getWeatherSuccessAction {
  type: typeof GET_WEATHER_SUCCESS,
  payload: WeatherArea[]
}

export interface getWeatherFailAction {
  type: typeof GET_WEATHER_FAIL,
  payload: string
}

export type AppActions = getWeatherRequestAction|getWeatherSuccessAction|getWeatherFailAction|getCityAction