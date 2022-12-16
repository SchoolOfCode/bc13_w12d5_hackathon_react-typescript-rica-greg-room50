import { weatherObj } from "../App/App";
import { forecastArr } from "../App/App";

type propsObj = {
weather: weatherObj;
forecast: forecastArr;
};

export default function WeatherCard(props: propsObj) {
const weather = props.weather;
const forecast = props.forecast;

console.log("Forecast in weather card", forecast);

return (
<div>
    <h2>{weather.name}</h2>
    <h3>{weather.main.temp}°C</h3>
    <p>{weather.weather[0].description}</p>
    <img
    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt="weather-icon"
    />
    <div>
    {forecast.map(element => (
        <div>
        <ul>
            <li><img src={`http://openweathermap.org/img/wn/${element.icon}@2x.png`} alt="weather-icon"/></li>
            <li>{element.time}</li>
            <li>{element.temp}</li>
            <li>{element.description}</li>
        </ul>
        </div>
    ))}
    </div>
</div>
);
}
