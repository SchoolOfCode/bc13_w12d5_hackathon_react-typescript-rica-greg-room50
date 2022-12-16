 import { cityInfoObj } from "../App/App"
type PropsObj = {
    cityInfo: cityInfoObj
}


export default function Display(props: PropsObj ){
    const {lat, lon, city} = props.cityInfo
    return <div>
        <h2>{city}</h2>
    </div>
}