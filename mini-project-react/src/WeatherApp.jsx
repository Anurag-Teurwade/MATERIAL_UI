import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css';

export default function WeatherApp () {

    let [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 17.69,
        humidity: 68,
        temp: 18.05,
        tempMax: 18.05,
        tempMin: 18.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    
    
    return (
        <div className="weatherApp">

            <h1 style={{textAlign :"center"}}>Weather Forecast</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>  

    );
}