import axios from "axios";
import apiKey from "../../APIKey";
import { useState, useEffect } from "react";
import {
  Container,
  RightContent,
  LeftContent,
  Text,
  SearchComponent,
  Location,
  LocalTime,
  Temperature,
  WeatherCondition,
  WeatherNow,
  UpperContent,
  LowerContent,
  Advice,
} from "./styles";
import { Search } from "@styled-icons/boxicons-regular";
import { CardGraph } from "../CardGraph";
import { CardGroup } from "../CardGroup";
import sunImg from "../../assets/sun.svg";
import moonImg from "../../assets/moon.svg";

export function Main() {
  const [celsius, setCelsius] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [currentData, setCurrentData] = useState(false);
  const [hourArray, setHourArray] = useState([]);

  function handleSearchInput(event) {
    setSearchValue(event.target.value);
  }

  async function handleSubmitSeach(event) {
    event.preventDefault();
    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}&days=1&aqi=no&alerts=no&lang=pt`
      )
      .then((response) => {
        setCurrentData({
          locationName: response.data.location.name,
          countryName: response.data.location.country,
          localtTime: response.data.location.localtime.replaceAll("-", "/"),
          temp: response.data.current.temp_c,
          condition: response.data.current.condition.text,
          humidity: response.data.current.humidity,
          wind: response.data.current.wind_kph,
          precipitation: response.data.current.precip_mm,
          uvIndex: response.data.current.uv,
          feelsLike: response.data.current.feelslike_c,
          chanceOfRain:
            response.data.forecast.forecastday[0].day.daily_chance_of_rain,
          isDay: response.data.current.is_day,
        });

        setHourArray(response.data.forecast.forecastday[0].hour);
        setSearchValue("");
      });
  }
  return (
    <Container isDay={currentData.isDay}>
      <LeftContent>
        <SearchComponent>
          <input
            type="search"
            placeholder="Ex.: Rio de Janeiro"
            onChange={handleSearchInput}
            value={searchValue}
          />
          <button onClick={handleSubmitSeach}>
            <Search />
          </button>
        </SearchComponent>
        {currentData ? (
          <>
            <Location>
              {currentData.locationName || " "},{" "}
              {currentData.countryName || " "}
            </Location>
            <LocalTime>{currentData.localtTime}</LocalTime>
            <WeatherNow>
              <Temperature
                onClick={() => setCelsius((prevState) => !prevState)}
              >
                {celsius
                  ? `${currentData.temp} °C`
                  : `${currentData.temp * 1.8 + 32} °F`}
              </Temperature>
              <WeatherCondition>{currentData.condition}</WeatherCondition>
            </WeatherNow>
            <img
              className="astro"
              src={currentData.isDay ? sunImg : moonImg}
              alt="Imagem ilustrativa de um Sol."
            />
          </>
        ) : (
          <Advice>Digite o local que deseja pesquisar.</Advice>
        )}
      </LeftContent>
      <RightContent>
        <UpperContent>
          <Text>
            <h3>Olá!</h3>
            <p>Veja a previsão do tempo para hoje.</p>
          </Text>
          <CardGraph data={hourArray}></CardGraph>
        </UpperContent>
        <LowerContent>
          <Text>
            <p>
              Mais detalhes <span>(Agora)</span>
            </p>
          </Text>
          <CardGroup data={currentData}></CardGroup>
        </LowerContent>
      </RightContent>
    </Container>
  );
}
