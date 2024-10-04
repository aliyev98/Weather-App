import React from 'react'
import { IoSearch } from "react-icons/io5";
import { CgCalendarDates } from 'react-icons/cg'
import { FaRegSmile } from 'react-icons/fa'
import { IoRainySharp } from 'react-icons/io5'
import { RiCelsiusFill } from 'react-icons/ri'
import { useSelector } from 'react-redux';

const LeftSide = ({ location, locationHandler }) => {

  const data = useSelector(state => state.weather.data)

  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeString = data?.location?.localtime;

  return (
    <div className='left-side'>

      <div className="input-container">
        <div className='search-icon-container'>
          <IoSearch className='search-icon' />
        </div>
        <input className='input' onChange={locationHandler} value={location} type="text" placeholder='Search for places...' />
      </div>

      <div className="city-name">
        {data?.location?.region} , {data?.location?.country}
      </div>

      <div className="img">

        <img src={data?.current?.condition?.icon} alt="icon" />

        <div className="weather-status">{data?.current?.condition?.text}</div>

      </div>

      <div className="degree">

        <span>{data?.current?.temp_c}</span>

        <div>
          <RiCelsiusFill className='degree-icon' />
        </div>

      </div>

      <div className="max-and-min">

        <span className="max">
          <b>Max:</b>
          &nbsp;
          <span>
            {data?.forecast?.forecastday[0]?.day?.maxtemp_c} <RiCelsiusFill className='degree-icon' />
          </span>
        </span>

        <span className="min">
          <b>Min:</b>
          &nbsp;
          <span>{data?.forecast?.forecastday[0]?.day?.mintemp_c} <RiCelsiusFill className='degree-icon' /></span>
        </span>

      </div>

      <div className="infos">

        <div className="time">
          <CgCalendarDates className='date-icon' />
          <span><b>{days[date.getDay()]} ,</b><span>&nbsp;{timeString ? timeString.split(" ")[1] : "-"}</span></span>
        </div>

        <div className="feels-like">
          <FaRegSmile className='smile-icon' />
          <span>
            <b>Feels Like: </b> <span>{data?.current?.feelslike_c} <RiCelsiusFill className='temp-icon' /></span>
          </span>
        </div>

        <div className="rain-chance">
          <IoRainySharp className='rain-icon' />
          <span>
            <b>Rain Cahance: </b> <span>{data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain} %</span>
          </span>
        </div>

      </div>

    </div>

  )
}

export default LeftSide