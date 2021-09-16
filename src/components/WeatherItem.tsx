import React from 'react';
import moment from 'moment';

import {Weather} from 'models/weather';
import {WeatherIcon, WindIcon, WeatherInfoWrapper} from './WeatherInfo.styled';
import {ThemeProvider} from 'styled-components';

interface WeatherInfoProps {
	info: Weather
}
function WeatherInfo(props: WeatherInfoProps) {
	const {info} = props;
	const maxTemp = info.max_temp.toFixed(0);
	const minTemp = info.min_temp.toFixed(0);
	const windSpeed = info.wind_speed.toFixed(0);

	const getDate = () => {
		const date = moment(info.applicable_date).format('LL');
		const today = moment().format('LL');
		const tomorrow = moment().add(1, 'days').format('LL');
		if(today === date) {
			return 'Today';
		} else if(tomorrow === date) {
			return 'Tomorrow';
		}
		return date;
	}
  return (
    <WeatherInfoWrapper className="mt-4 h-100 d-flex flex-column">
			<h5>{getDate()}</h5>
			<div className="mt-auto text-center">
				<div>
				<ThemeProvider theme={{ icon: info.weather_state_abbr }}>
					<WeatherIcon />
				</ThemeProvider>
				</div>
				<span>{info.weather_state_name}</span>
			</div>
			<div className="mt-4">
				<strong>Temp</strong>
				<p>Max: {maxTemp}°C</p>
				<p>Min: {minTemp}°C</p>
			</div>
			<div>
				<ThemeProvider theme={{ degree: info.wind_direction_compass }}>
					<WindIcon />
				</ThemeProvider>
				{windSpeed}mph
			</div>
		</WeatherInfoWrapper>
  );
}

export default WeatherInfo;
