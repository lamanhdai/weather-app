import {WeatherArea} from 'models/weather'
export const GET_CITY = 'GET_CITY';
export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';

export interface getWeatherRequestAction {
  type: typeof GET_WEATHER_REQUEST
  payload: string
}
export const getWeatherRequest = (city: string): getWeatherRequestAction => ({
  type: GET_WEATHER_REQUEST,
  payload: city
})

export interface getCityAction {
  type: typeof GET_CITY,
  payload: string
}
export const getCity = (payload: string): getCityAction => ({
  type: GET_CITY,
  payload: payload
})

export interface getWeatherSuccessAction {
  type: typeof GET_WEATHER_SUCCESS,
  payload: WeatherArea[]
}
export const getWeatherSuccess = (payload: WeatherArea[]): getWeatherSuccessAction => ({
  type: GET_WEATHER_SUCCESS,
  payload: payload
})

export interface getWeatherFailAction {
  type: typeof GET_WEATHER_FAIL,
  payload: string
}
export const getWeatherFail = (error: string): getWeatherFailAction => ({
  type: GET_WEATHER_FAIL,
  payload: error
})

export type AppActions = getWeatherRequestAction|getWeatherSuccessAction|getWeatherFailAction|getCityAction