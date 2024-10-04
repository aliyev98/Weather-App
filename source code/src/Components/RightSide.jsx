import React from 'react'
import Forecast from './Forecast'
import Hourly from './Hourly'
import Highlights from './Highlights'

const RightSide = () => {

  return (
    <div className='right-side'>

      <div className='header forecast-header'>Forecast for the Next Days</div>

      <Forecast />

      <div className="header hourly-header">Hourly</div>

      <Hourly />

      <div className="header highlights-header">Today's Highlights</div>

      <Highlights />

    </div>
  )
}

export default RightSide