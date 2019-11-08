import React, { useEffect } from "react";
import axios from "axios";

const CapitalWeather = ({ country, weather, setWeather }) => {
    const capital = country.capital;
    const uricapital = encodeURI(capital);
    const localWeather = weather.consolidated_weather ? weather.consolidated_weather[0] : {};
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${uricapital}`).then(response => {
            const woeid = response.data[0] ? response.data[0].woeid : 0;
            if (woeid === 0) {
                setWeather({})
            } else {
                axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`).then(response => {
                    setWeather(response.data);
                });
            }
        });
    }, [uricapital, setWeather]);
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <div><b>{localWeather.max_temp ? "Temperature (C):" : "No temperature data found"}</b> {localWeather.max_temp}</div>
            <div><b>{localWeather.wind_speed ? "Wind speed (m/s):" : "No wind data found"}</b> {localWeather.wind_speed}</div>
        </div>
    )
};

export default CapitalWeather;
