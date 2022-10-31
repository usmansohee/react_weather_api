import React, { useState, useEffect } from 'react'
import "./style.css"
import Weather from './weather'

const Temp = () => {

    const [searchValue, setSearchValue] = useState("lahore")
    const [currentWeather, setWeatherData] = useState({})

    const getWeatherData = async () => {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f44c7ac1fcee5b948ce2986949f82982`
            let response = await fetch(url)
            let data = await response.json()
            const { temp, humidity, pressure } = data.main
            const { main } = data.weather[0]
            const { speed } = data.wind
            const { name: city } = data
            const { country, sunset } = data.sys
            const weatherData = {
                temp,
                humidity,
                pressure,
                main,
                speed,
                city,
                country,
                sunset
            }
            setWeatherData(weatherData)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getWeatherData()
    }, [])

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input className='searchTerm'
                        type="search"
                        placeholder="Enter city name"
                        autoFocus
                        id='search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                    <button className='searchButton' type='button' onClick={getWeatherData}></button>
                </div>
            </div>
            <Weather currentWeather={currentWeather} />
        </>
    )
}

export default Temp