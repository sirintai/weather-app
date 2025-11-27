const BASE = 'https://api.openweathermap.org/data/2.5'
const KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

async function fetchCurrentByCity(city) {
  const res = await fetch(`${BASE}/weather?q=${encodeURIComponent(city)}&appid=${KEY}`)
  if (!res.ok) throw new Error('City not found')
  return res.json()
}

async function fetchForecastByCity(city) {
  const res = await fetch(`${BASE}/forecast?q=${encodeURIComponent(city)}&appid=${KEY}`)
  if (!res.ok) throw new Error('Forecast not found')
  return res.json()
}

async function fetchCurrentByCoords(lat, lon) {
  const res = await fetch(`${BASE}/weather?lat=${lat}&lon=${lon}&appid=${KEY}`)
  if (!res.ok) throw new Error('Location not found')
  return res.json()
}

async function fetchForecastByCoords(lat, lon) {
  const res = await fetch(`${BASE}/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`)
  if (!res.ok) throw new Error('Forecast not found')
  return res.json()
}

export { fetchCurrentByCity, fetchForecastByCity, fetchCurrentByCoords, fetchForecastByCoords }
