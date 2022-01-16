import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from 'axios';

const API_KEY = "031f23cfd90304d3dadfa00c897f3784";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 380px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  background: #eee;
  font-family: Nunito;
`;

const AppLable = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

// functional component
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };

  return(
    <Container>
      <AppLable>Weather App</AppLable>
      {weather? (
        <WeatherComponent weather={weather}/>
      ) : (
      <CityComponent  updateCity = {updateCity} fetchWeather = {fetchWeather}/>
      )}
      </Container> 
    );
}

export default App;
