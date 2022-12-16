 import { cityInfoObj } from "../App/App"
type PropsObj = {
    cityInfo: cityInfoObj,
    weather: {}
}


export default function Display(props: PropsObj ){
    const {lat, lon, city} = props.cityInfo
    const weather = props.weather

    return <div>
        <h2>{city}</h2>
        <h3>{weather.main.temp}</h3>
        
    </div>
}