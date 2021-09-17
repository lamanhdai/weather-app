import React from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InView } from 'react-intersection-observer';

import {WeatherArea} from 'models/weather';
import WeatherInfo from 'components/WeatherInfo';
import Search from 'components/Search';
import {WeatherState} from 'store/reducers';
import {AppActions} from 'store/actions.type';
import {getWeatherRequest} from 'store/actions.creator';


interface WeatherListProps {
  weatherListByCity: WeatherArea[]
  err: string
  onSearch: (keyword: string) => void
  loading: boolean
}

export function WeatherList (props: WeatherListProps) {
  const {onSearch, weatherListByCity, err, loading} = props;
  const renderWeather = (list: WeatherArea[]) => {
    return list&&list.length?list.map(weatherArea => (
      <InView key={weatherArea.woeid}>
        {({ ref }) => (
          <div className="mt-5" ref={ref}>
            <h2>City: {weatherArea.city}</h2>
            <Row className="mt-2" >
              {
                weatherArea.weatherList.map(weather => (
                  <Col key={weather.id}><WeatherInfo info={weather} /></Col>
                ))
              }
            </Row>
          </div>
        )}
        </InView>
      )):<div className="text-center mt-5">Oops ! no result</div>
    
  }

  const renderSpinner = () => {
    return <div className="text-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  }
  return (
    <Container className="mt-5">
        <Search onSearch={onSearch} />
        {
          loading?
          renderSpinner()
          :
          renderWeather(weatherListByCity)
        }
        {
          err&&<div>{err}</div>
        }
    </Container>
  )
}

function mapStateToProp(state: WeatherState) {
  const {weatherListByCity, err, loading} = state;
  return {
    weatherListByCity,
    err,
    loading
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