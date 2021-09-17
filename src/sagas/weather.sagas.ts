import { call, put, takeEvery } from 'redux-saga/effects';

import services from 'services';
import {City} from 'models/city';
import {WeatherArea} from 'models/weather';
import { getCityAction, GET_WEATHER_REQUEST } from 'store/actions.type';
import { getWeatherSuccess,getWeatherFail } from 'store/actions.creator';

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
  } catch(_) {
    yield put(getWeatherFail('Sorry buggy'));
  }
}