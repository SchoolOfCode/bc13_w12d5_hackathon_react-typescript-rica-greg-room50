import { weatherObj } from "../App/App";
import { forecastArr } from "../App/App";
import "./styles.css"

type propsObj = {
weather: weatherObj;
forecast: forecastArr;
};

export default function WeatherCard(props: propsObj) {
const weather = props.weather;
const forecast = props.forecast;

console.log("Forecast in weather card", forecast);

return (
<div className="boss">
    <div className="main-card">
    <h2>{weather.name}</h2>
    <h1>{Math.floor(weather.main.temp)}°C</h1>
     <img
    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt="weather-icon"
    />
    <p>{weather.weather[0].description}</p>
   
    </div>
    <div className="forecast-cards">
    {forecast.map(element => (
        <div className="single-forecast-card">
        <ul>
            <li>{element?.time.split(" ")[1]?.slice(0, 5)}</li>
            <li><img src={`http://openweathermap.org/img/wn/${element.icon}@2x.png`} alt="weather-icon"/></li>
            <li className="single-card-description">{element.description}</li>
            <li>{Math.floor(element.temp)}°C</li>
        </ul>
        </div>
    ))}
    </div>
</div>
);
}
