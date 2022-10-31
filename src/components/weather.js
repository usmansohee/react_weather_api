import React, { useState, useEffect } from 'react'
import "./style.css"

const Weather = ({ currentWeather }) => {

    const [mainValue, setValue] = useState("")
    const {
        temp,
        humidity,
        pressure,
        main,
        speed,
        city,
        country,
        sunset
    } = currentWeather

    useEffect(() => {

        if (main) {
            switch (main) {
                case "Haze":
                    setValue("wi-day-haze")
                    break;
                case "Cloudy":
                    setValue("wi-day-cloudy")
                    break;
                case "Clouds":
                    setValue("wi-day-cloudy")
                    break;
                case "Sunny":
                    setValue("wi-day-sunny")
                    break;
                case "Clear":
                    setValue("wi-day-sunny")
                    break;
                case "Rain":
                    setValue("wi-day-rain")
                    break;
                case "Smoke":
                    setValue("wi-smoke")
                    break;

                default:
                    setValue("wi-day-sunny");
                    break;
            }
        }

    }, [main])

    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let sunset_time = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${mainValue}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{main}</div>
                        <div className='place'> {city}, {country}</div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleDateString()}</div>
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className="wi wi-sunset"></i></p>
                            <p className='extra-info-leftside'>{sunset_time} <br /> Sunset</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className="wi wi-humidity"></i></p>
                            <p className='extra-info-leftside'>{humidity} <br /> Humidity</p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p><i className="wi wi-rain"></i></p>
                            <p className='extra-info-leftside'>{pressure} <br /> Pressure</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className='extra-info-leftside'>{speed} <br /> Wind Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weather