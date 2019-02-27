import styled from 'styled-components';

const CurrentWeather = styled.article`
  display: flex;
  width: 100%;
  padding: 40px 10px 50px;

  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.bHigh};
`;

CurrentWeather.Temp = styled.span`
  display: block;
  margin-bottom: 5px;

  font-size: 50px;
  font-weight: bold;
`;

CurrentWeather.Place = styled.span`
  display: block;
  margin-bottom: 30px;
`;

CurrentWeather.Sky = styled.span`
  display: block;

  font-size: 18px;
`;

export default CurrentWeather;
