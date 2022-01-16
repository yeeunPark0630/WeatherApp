import styled from "styled-components";


export const WeatherInfoIcons = {
    Sunrise: "/icons/Sunrise.svg",
    Humidity: "/icons/Humidity.png",
    Wind: "/icons/Wind.svg"
};

export const WeatherIcons = {
    "01d": "/icons/Sunny.png",
    "01n": "/icons/night.png",
    "02d": "/icons/sunny-cloudy.png",
    "02n": "/icons/cloud-night.png",
    "03d": "/icons/cloudy.png",
    "03n": "/icons/cloudy.png",
    "04d": "/icons/sunny-cloudy.png",
    "04n": "/icons/cloudy-night.png",
    "09d": "/icons/rain.png",
    "09n": "/icons/rain.png",
    "10d": "/icons/rain2.png",
    "10n": "/icons/rain2-n.png",
    "11d": "/icons/thunderstorm.png",
    "11n": "/icons/thunderstorm.png",
    "13d": "/icons/snow.png",
    "13n": "/icons/snow.png"
};

const WeatherCondition = styled.div`
    display: flex:
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto;
`;

const ConditionContainer = styled.div`
    display: flex:
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Condition = styled.span` 
    justify-content: center;
    align-items: center;
    font-size: 14px;
    & span{
        font-size: 28px;
    }
`;

const WeatherLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 10px;
`;

const Location = styled.span`
    font-size: 28px;
    font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%;
`;

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px 10px;
`;

const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px
    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`;


const WeatherInfoComponent=(props)=>{
    const {name, value} = props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                <span>{name}</span>
                {value}
            </InfoLabel>
        </InfoContainer>
    );
};



const WeatherComponent = (props) =>{
   // const history =  useNavigate();

    
    const {weather} = props;
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()}: ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
    <>
        <WeatherCondition>
            <ConditionContainer>
                <Condition>
                    <span> {`${Math.floor(weather?.main.temp -273)}°C`} </span>
                    {`| ${weather?.weather[0].description }`}
                </Condition>
            </ConditionContainer>
            <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys.country}`}</Location>
        <WeatherInfoLabel>Weather Info </WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name="Sunrise" value={getTime(weather?.sys.sunrise)}/>
            <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity + ' %'}/>
            <WeatherInfoComponent name="Wind" value={weather?.wind?.speed + ' m/s'}/>
        </WeatherInfoContainer>
    
    </>
    );
};

export default WeatherComponent;