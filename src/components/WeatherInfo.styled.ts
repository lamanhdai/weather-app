import styled from 'styled-components';

export const WeatherIcon = styled.span`
  background: url(https://www.metaweather.com/static/img/weather/${props => props.theme.icon}.svg) no-repeat left top;
  width: 32px;
  height: 32px;
  background-size: contain;
  display: inline-block;
`
const degList = (degName: string) => {
  const obc :{[key: string]: string} = {
    nne: '22.5deg',
    ne: '45deg',
    ene: '67.5deg',
    e: '90deg',
    ese: '112.5deg',
    se: '135deg',
    sse: '157.5deg',
    s: '180deg',
    ssw: '202.5deg',
    sw: '225deg',
    wsw: '247.5deg',
    w: '270deg',
    wnw: '292.5deg',
    nw: '315deg',
    nnw: '337.5deg'
  };
  return obc[degName.toLowerCase()];
}

export const WindIcon = styled.span`
  background: url(https://www.metaweather.com/static/img/windarrow.svg);
  width: 16px;
  height: 16px;
  background-size: cover;
  display: inline-block;
  transform: rotate(${props => degList(props.theme.degree)})
`

export const WeatherInfoWrapper = styled.div`
  font-size: 12px;
`













