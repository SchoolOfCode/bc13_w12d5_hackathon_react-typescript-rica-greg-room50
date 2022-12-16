import React, {useState, useEffect} from 'react';
import './App.css';
import Search from '../Search';
import Display from '../Display';

type cityInfoObj = {
  lat: number,
  lon: number
}

function App() {
  const [cityInfo, setCityInfo] = useState <cityInfoObj> ({lat: 0, lon: 0});
  const [weather, setWeather] = useState({});
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
  }

  async function getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    setWeather(data);
  }

  async function getCityInfo(city : string){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    const data = await response.json()
    const cityInfoObj : cityInfoObj = {
      lat: data[0].lat,
      lon: data[0].lon
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
      <Search handleUserInput={handleUserInput} handleClick={handleClick} />
      <Display />
    </div>
  );
}

export default App;
