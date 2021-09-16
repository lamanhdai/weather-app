import { call, put, takeEvery } from 'redux-saga/effects';

import services from 'services';
import {City} from 'models/city';
import {WeatherArea} from 'models/weather';
import { getWeatherSuccess,getWeatherFail, getCityAction, GET_WEATHER_REQUEST } from 'store/actions';

export default function* searchWeatherRequest() {
  yield takeEvery(GET_WEATHER_REQUEST, searchPlace);
}

function* searchPlace(action: getCityAction) {
  try {
    const cityList: City[] = yield call(services.getPlaceID, action.payload);
    if(cityList.length) {
      const weatherAreaList: WeatherArea[] = yield call(services.getForecastWeatherList, cityList);
      yield put(getWeatherSuccess(weatherAreaList));
    } else {
      yield put(getWeatherSuccess(([])));
    }
  } catch(e) {
    yield put(getWeatherFail((e as Error).message));
  }
}