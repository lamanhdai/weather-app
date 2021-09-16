import axios from 'axios';

import {City} from '../models/city'
import {WeatherArea} from '../models/weather'

const ins = axios.create({
  baseURL: '/api/',
  timeout: 10000
});

class WeatherAPI {
  async getPlaceID(query: string): Promise<City[]> {
    const {data} = await ins.get<City[]>(`location/search/?query=${query}`);
    const cityList = data.map(city => {
      const {title, woeid} = city;
      return {title, woeid};
    });
    return cityList;
  }
  async getForecastWeatherList(cityList: City[]): Promise<WeatherArea[]> {
    try {
      const weatherResults = await (Promise as any).allSettled(cityList.map(city => {
        return ins.get<WeatherArea>(`location/${city.woeid}/`)
      }));
      if(weatherResults) {
        const weatherByAreaList: WeatherArea[] = weatherResults.map((weather: any) => {
          const {data} = weather.value;
          const weatherArea: WeatherArea = {
            woeid: data.woeid,
            title: data.city,
            weatherList: data.consolidated_weather
          }
          return weatherArea;
        })
        return weatherByAreaList;
      }
    } catch(_) {
      return []
    }
    return [];
  }
}

export default new WeatherAPI();