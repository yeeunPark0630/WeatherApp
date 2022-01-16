import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    padding: 10px;
    margin: 10px;
`;

const SearchCityLabel = styled.span`
    color:black;
    font-size: 18px;
    font-weight: bold;
`;

const SearchBox= styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    border-radius: 2px;
    color:black;
    font-weight: bold;
    margin: 20px auto;

    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }

    & button{
        cursor: pointer;
        color: white;
        background-color: #434D4C;
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }
`;



const CityComponent = (props) =>{
    const {updateCity, fetchWeather} = props;
    return(
        <>
        <WeatherLogo src="/icons/Sunny.png" />
        <SearchCityLabel>Find Weather</SearchCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="City"
             onChange={(e)=>updateCity(e.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
};

export default CityComponent;