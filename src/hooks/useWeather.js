import { useState, useEffect } from 'react'
import { fetchCurrentByCity, fetchForecastByCity, fetchCurrentByCoords, fetchForecastByCoords } from '../services/weatherApi'
import { kelvinToC } from '../utils/format'

const RECENT_KEY = 'weather:recent'

export default function useWeather() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recent, setRecent] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem(RECENT_KEY)
    if (stored) setRecent(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent))
  }, [recent])

  async function fetchByCity(city) {
    try {
      setLoading(true)
      setError('')
      const w = await fetchCurrentByCity(city)
      const f = await fetchForecastByCity(city)
      setWeather(transformCurrent(w))
      setForecast(transformForecast(f))
      setRecent(prev => [city, ...prev.filter(c => c.toLowerCase() !== city.toLowerCase())].slice(0,5))
    } catch (e) {
      setError(e.message)
      setWeather(null)
      setForecast(null)
    } finally {
      setLoading(false)
    }
  }

  async function fetchByCoords(lat, lon) {
    try {
      setLoading(true)
      setError('')
      const w = await fetchCurrentByCoords(lat, lon)
      const f = await fetchForecastByCoords(lat, lon)
      setWeather(transformCurrent(w))
      setForecast(transformForecast(f))
      setRecent(prev => [w.name, ...prev.filter(c => c.toLowerCase() !== w.name.toLowerCase())].slice(0,5))
    } catch (e) {
      setError(e.message)
      setWeather(null)
      setForecast(null)
    } finally {
      setLoading(false)
    }
  }

  function clearRecent() { setRecent([]) }

  return { weather, forecast, loading, error, fetchByCity, fetchByCoords, recent, clearRecent }
}

function transformCurrent(data) {
  return {
    city: data.name,
    country: data.sys.country,
    temp: kelvinToC(data.main.temp),
    feels: kelvinToC(data.main.feels_like),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    condition: data.weather[0].main,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    dt: data.dt * 1000,
    coord: data.coord,
  }
}

function transformForecast(data) {
  // pick one forecast per day (around 12:00)
  const map = {}
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000).toISOString().slice(0,10)
    if (!map[date] && item.dt_txt.includes('12:00:00')) {
      map[date] = item
    }
  })
  const arr = Object.values(map).slice(0,5).map(it => ({
    date: it.dt * 1000,
    min: kelvinToC(it.main.temp_min),
    max: kelvinToC(it.main.temp_max),
    icon: `https://openweathermap.org/img/wn/${it.weather[0].icon}@2x.png`,
    condition: it.weather[0].main,
  }))
  return arr
}
