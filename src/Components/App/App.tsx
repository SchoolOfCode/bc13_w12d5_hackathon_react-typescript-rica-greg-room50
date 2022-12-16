import React, {useState, useEffect} from 'react';
import './App.css';
import Search from '../Search';
import Display from '../Display';

export type cityInfoObj = {
  lat: number,
  lon: number,
  city: string
}

export type weatherObj = {
  base: string
  clouds: {all: number}
  cod: number
  coord: {lon: number, lat: number}
  dt: number
  id: number
  main: {feels_like: number, grnd_level?: number | undefined, humidity: number, pressure: number, sea_level?: number | undefined, temp: number, temp_max: number, temp_min: number}
  name: string
  sys: {country?: string | undefined, sunrise: number, sunset: number}
  timezone: number
  visibility: number
  weather: [{id: number, main: string, description: string, icon: string}]
  wind: {deg: number, gust: number, speed: number}
}

export type forecastArr = {
  time: string,
  temp: number,
  description: string,
  icon: string
}[]

function App() {
  const [cityInfo, setCityInfo] = useState <cityInfoObj> ({lat: 0, lon: 0, city: ""});
  const [weather, setWeather] = useState <weatherObj> ({
    base: "",
    clouds: {all: 0},
    cod: 0,
    coord: {lon: -0.1276, lat: 
51.5073},
    dt: 0,
    id: 0,
    main: {feels_like: 0, grnd_level: 0, humidity: 0, pressure: 0, sea_level: 0, temp: 0, temp_max: 0, temp_min: 0},
    name: "",
    sys: {country: "", sunrise: 0, sunset: 0},
    timezone: 0,
    visibility: 0,
    weather: [{id: 0, main: "", description: "", icon: ""}],
    wind: {deg: 0, gust: 0, speed: 0}
  });
  const [forecast, setForecast] = useState <forecastArr>([{time: "", temp: 0, description: "", icon: ""}])
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");
  const apiKey = "5719296ca5bace34a0a2a4c27f534df4"

  useEffect(() => {
    getCityInfo(search)
  }, [search])

  useEffect(() => {
    getWeather()
  }, [cityInfo])

  function handleUserInput(event : React.ChangeEvent<HTMLInputElement>) : void {
    setUserInput(event.target.value.toLowerCase())
  }

  function handleClick() {
    setSearch(userInput)
    setUserInput("")
  }

  async function getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    setWeather(data);
    getForecast();
  }

  async function getForecast(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.lat}&lon=${cityInfo.lon}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    console.log("Forecast", data)
    let forecastArr = [];
    for (let i = 0; i < 4; i++) {
      const forecastObj = {
        time: data.list[i].dt_txt,
        temp: data.list[i].main.temp,
        description: data.list[i].weather[0].description,
        icon: data.list[i].weather[0].icon
      }
      forecastArr.push(forecastObj)
    }
    setForecast(forecastArr)
  }

  async function getCityInfo(city : string){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    const data = await response.json()
    const cityInfoObj : cityInfoObj = {
      lat: data[0].lat,
      lon: data[0].lon,
      city: data[0].name
    }
    setCityInfo(cityInfoObj);
  }

  useEffect(() => {
    console.log("City info: ", cityInfo)
  }, [cityInfo])

  useEffect(() => {
    console.log("Weather: ", weather)
  }, [weather])

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search userInput={userInput} handleUserInput={handleUserInput} handleClick={handleClick} />
      {search ? <Display cityInfo={cityInfo} weather={weather} forecast={forecast}/> : null}
    </div>
  );
}

export default App;
