import React, { useEffect, useState } from 'react'
import './Styles/style.scss'
import { useDispatch } from 'react-redux';
import { fetchWeather } from './Redux/Slices/WeatherSlice';
import RightSide from './Components/RightSide';
import LeftSide from './Components/LeftSide';

const App = () => {

  const [location, setLocation] = useState('baku');

  const dispatch = useDispatch();

  const locationHandler = (e) => {
    setLocation(e.target.value)
  }

  useEffect(() => {

    if (location) {
      try {
        dispatch(fetchWeather(location));
      } catch (error) {
        console.log(error)
      }
    }

  }, [location, dispatch])

  return (
    <div className='container'>
      <LeftSide location={location} locationHandler={locationHandler} />
      <RightSide />
    </div>
  )
}

export default App