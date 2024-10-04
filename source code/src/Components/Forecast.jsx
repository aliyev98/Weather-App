import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { WiCelsius } from 'react-icons/wi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { useSelector } from 'react-redux'

const Forecast = () => {

    const data = useSelector(state => state.weather.data)

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return days[date.getDay()];
    }

    return (
        <div className="forecast">

            <div className="forecast-boxes">

                {data?.forecast?.forecastday?.map((forecast, key) => (
                    <div className="box" key={key}>

                        <div className="date">{getDayName(forecast?.date)}</div>  {/* Gün ismini yazdır */}

                        <div className="temperature">
                            <span className="max"><FaArrowUp className='max-arrow' />&nbsp;{forecast?.day?.maxtemp_c}<WiCelsius className='degree-icon' /></span>
                            <img src={forecast?.day?.condition?.icon} alt="icon" className="icon" />
                            <span className="slash"><b>/</b></span>
                            <span className="min"><FaArrowDown className='min-arrow' />&nbsp;{forecast?.day?.mintemp_c}<WiCelsius className='degree-icon' /></span>
                        </div>

                        <div className="astro">

                            <div className="sunrise">
                                <GiSunrise className='sunrise-icon' />
                                <span className="sunrise">{forecast?.astro?.sunrise.split(' ')[0]}</span>
                            </div>

                            <div className="wind">
                                <FaWind className='wind-icon' />
                                <span className="wind-value">{forecast?.day?.maxwind_mph} <span> mph</span></span>
                            </div>

                            <div className="sunset">
                                <GiSunset className='sunset-icon' />
                                <span className="sunset">{forecast?.astro?.sunset.split(' ')[0]}</span>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Forecast
