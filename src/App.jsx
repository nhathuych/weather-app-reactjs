import React, { useEffect, useState } from 'react'
import Temperature from './components/Temperature'
import Highlights from './components/Highlights'

function App() {
  const [location, setLocation] = useState('Saigon')
  const [weatherData, setWeatherData] = useState(null)
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=e6776c1e17994a5fb98162941240211&q=${location}&aqi=no`

  useEffect(() => {
    fetch(apiURL).then((res) => {
      if (!res.ok) {
        throw new Error('An error has occurred')
      }
      return res.json()
    }).then((data) => {
      console.log(data)
      setWeatherData(data)
    }).catch((e) => {
      console.log(e)
    })
  }, [location])

  return (
    <div className='flex justify-center align-top bg-[#1b1d43] h-screen'>
      <div className='mt-40 h-1/3 w-1/5'>
        <Temperature
          setLocation={setLocation}
          stats={{
            temp_c: weatherData?.current?.temp_c,
            condition: weatherData?.current?.condition?.text,
            isDay: weatherData?.current?.is_day,
            location: weatherData?.location?.name,
            time: weatherData?.location?.localtime
          }}
        />
      </div>
      <div className='grid grid-cols-2 gap-5 h-1/3 w-1/3 p-10 mt-40'>
        <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
        {
          weatherData && (
            <>
              <Highlights
                stats={{
                  title: 'Wind Status',
                  value: weatherData?.current?.wind_mph,
                  unit: 'mph',
                  direction: weatherData?.current?.wind_dir
                }}
              />
              <Highlights
                stats={{
                  title: 'Humidity',
                  value: weatherData?.current?.humidity,
                  unit: '%',
                }}
              />
              <Highlights
                stats={{
                  title: 'Visibility',
                  value: weatherData?.current?.vis_miles,
                  unit: 'miles',
                }}
              />
              <Highlights
                stats={{
                  title: 'Air Pressure',
                  value: weatherData?.current?.pressure_mb,
                  unit: 'mb',
                }}
              />
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
