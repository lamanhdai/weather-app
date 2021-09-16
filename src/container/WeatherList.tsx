import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {WeatherArea} from 'models/weather';
import WeatherItem from 'components/WeatherItem';
import Search from 'components/Search';
import {WeatherState} from 'store/reducers';
import {AppActions, getWeatherRequest} from 'store/actions';

interface WeatherListProps {
  weatherListByCity: WeatherArea[]
  err: string
  onSearch: (keyword: string) => void
}

function WeatherList (props: WeatherListProps) {
  const {onSearch, weatherListByCity, err} = props;
  return (
    <Container className="mt-5">
      <Search onSearch={onSearch} />
      {
        weatherListByCity.map(weatherArea => (
          <Row className="mt-5" key={weatherArea.woeid}>
            {
              weatherArea.weatherList.map(weather => (
                <Col key={weather.id}><WeatherItem info={weather} /></Col>
              ))
            }
          </Row>
        ))
      }
      {
        err&&<div>{err}</div>
      }
    </Container>
  )
}

function mapStateToProp(state: WeatherState) {
  const {weatherListByCity, err} = state;
  return {
    weatherListByCity,
    err
  }
}

function mapDispatchToProp(dispatch: Dispatch<AppActions>) {
  return {
    onSearch: (keyword: string) => {
      dispatch(getWeatherRequest(keyword))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(WeatherList);