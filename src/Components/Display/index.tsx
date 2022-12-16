 import { cityInfoObj } from "../App/App"
 import { weatherObj } from "../App/App"

type PropsObj = {
    cityInfo: cityInfoObj,
    weather: weatherObj
}


export default function Display(props: PropsObj ){
    const {lat, lon, city} = props.cityInfo
    const weather = props.weather

    return <div>
        <h2>{weather.name}</h2>
        <h3>{weather.main.temp}°C</h3>
        <p>{weather.weather[0].description}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        
    </div>
}