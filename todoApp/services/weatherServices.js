import axios from "axios";

export function getWeather(props){
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=3ca91399c1beea00df518dfc4807ebc6&units=metric&lang=vi`
    )
}