import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 380px;
  border-radius: 4x;
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

const CityComponent = styled.div`
  display:flex;
  flex-direction:column;
`;

const WeatherComponent = styled.div`
  display:flex;
  flex-direction:column;
`;

// functional component
function App() {
  return(
    <Container>
      <AppLable>Weather App</AppLable>
      <CityComponent>CityComponent</CityComponent>
      <WeatherComponent>WeatherComponent</WeatherComponent>
    </Container> 
    );
}

export default App;
