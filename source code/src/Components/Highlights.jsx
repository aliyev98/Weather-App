import React from 'react'
import { FaWind } from 'react-icons/fa'
import { WiCelsius, WiHumidity } from 'react-icons/wi'
import { GiSunrise, GiSunset, GiThreeLeaves } from 'react-icons/gi'
import { TbUvIndex } from 'react-icons/tb'
import { MdCompress, MdDewPoint, MdOutlineVisibility } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Highlights = () => {

  const data = useSelector(state => state.weather.data)
  return (
    <div className="highlights">

      <div className="boxes">

        <div className="box uv-index">
          <div className="title">UV Index</div>
          <TbUvIndex className='uv-icon' />
          <span className="uv-value">{data?.current?.uv}</span>
        </div>

        <div className="box wind-status">
          <div className="title">Wind Speed</div>
          <FaWind className='wind-icon' />
          <span className="wind-value">{data?.current?.wind_mph} <span>mph</span></span>
        </div>

        <div className="box sun">
          <div className="title">Sun.R/Sun.S</div>
          <div className="sunrise">
            <GiSunrise className='sunrise-icon' />
            <span>{data?.forecast?.forecastday[0]?.astro?.sunrise.split(' ')[0]}</span>
          </div>
          <div className="sunset">
            <GiSunset className='sunset-icon' />
            <span>{data?.forecast?.forecastday[0]?.astro?.sunset.split(' ')[0]}</span>
          </div>
        </div>

        <div className="box humidity">
          <div className="title">Humidity</div>
          <WiHumidity className='humidity-icon' />
          <span className="humidity-value">{data?.current?.humidity} %</span>
        </div>

        <div className="box visibility">
          <div className="title">Visibility</div>
          <MdOutlineVisibility className='visibility-icon' />
          <span className='visibility-value'>{data?.current?.vis_km} <span>km</span></span>
        </div>

        <div className="box air-quality">
          <div className="title">Air Quality</div>
          <GiThreeLeaves className='quality-icon' />
          <span className="us">US-EPA: <span>{data?.current?.air_quality?.['us-epa-index']}</span></span>
          <span className="gb">GB-DEFRA: <span>{data?.current?.air_quality?.['gb-defra-index']}</span></span>
        </div>

        <div className='box pressure'>
          <div className="title">Pressure</div>
          <MdCompress className='pressure-icon' />
          <span className="pressure-value">{data?.current?.pressure_in} <span>mm</span></span>
        </div>

        <div className='box dewpoint'>
          <div className="title">Dewpoint</div>
          <MdDewPoint className='dewpoint-icon' />
          <span className="dewpoint-value">
            {data?.current?.dewpoint_c}
            <WiCelsius className='degree-icon' />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Highlights