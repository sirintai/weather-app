import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Loader from './components/Loader'
import useWeather from './hooks/useWeather'

export default function App() {
  const { weather, forecast, loading, error, fetchByCity, fetchByCoords, recent, clearRecent } = useWeather()
  const [query, setQuery] = useState('')

  useEffect(() => {
    // try geolocation on mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
        () => fetchByCity('New York')
      )
    } else {
      fetchByCity('New York')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={() => { if (query.trim()) fetchByCity(query.trim()); setQuery('') }}
          recent={recent}
          onSelect={(city) => fetchByCity(city)}
          onClearRecent={clearRecent}
        />

        {loading && <Loader />}

        {error && <div className="mt-4 text-red-600">{error}</div>}

        {weather && <CurrentWeather data={weather} />}

        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  )
}
