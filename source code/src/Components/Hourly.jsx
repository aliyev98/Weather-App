import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegClock, FaTemperatureLow, FaWind } from 'react-icons/fa'
import { WiCelsius } from 'react-icons/wi'
import { useSelector } from 'react-redux';

const Hourly = () => {

  const data = useSelector(state => state.weather.data)

  const settings = {
    dots: false,
    infinite: true,
    speed: 0.1,
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8.5,
        }
      }
    ]
  };

  return (
    <div className="hourly">

      <Slider className='hourly-boxes' {...settings}>

        {
          data?.forecast?.forecastday[0]?.hour.map((hourlyData, key) => (
            <div className="box" key={key}>
              <div className="hour"><FaRegClock className='clock-icon' />&nbsp;{hourlyData?.time?.split(' ')[1]}</div>
              <div className="temperature"><FaTemperatureLow className='temp-icon' />&nbsp;{hourlyData?.temp_c}<WiCelsius className='degree-icon' /></div>
              <img src={hourlyData?.condition?.icon} alt="icon" />
              <div className="wind-speed"><FaWind className='wind-icon' />&nbsp;{hourlyData?.wind_mph} <span>&nbsp;mph</span></div>
            </div>
          ))
        }

      </Slider>
    </div>
  )
}

export default Hourly