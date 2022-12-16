 import { cityInfoObj } from "../App/App"
 import { weatherObj } from "../App/App"
 import { forecastArr } from "../App/App"
 import WeatherCard from "../WeatherCard/index"

type PropsObj = {
    cityInfo: cityInfoObj,
    weather: weatherObj,
    forecast: forecastArr
}

export default function Display(props: PropsObj ){
    const {lat, lon, city} = props.cityInfo
    const weather = props.weather
    const forecast = props.forecast

    return (<WeatherCard weather={weather} forecast={forecast}/>)
}