import React from 'react'
import { formatDate } from '../utils/format'

export default function CurrentWeather({ data }) {
  return (
    <div className="mt-6 flex items-center gap-6">
      <img src={data.icon} alt={data.condition} className="w-28 h-28" />
      <div>
        <div className="text-3xl font-semibold">{data.city}, {data.country}</div>
        <div className="text-sm text-gray-600">{formatDate(data.dt)}</div>
        <div className="mt-2 text-5xl font-bold">{data.temp}°C</div>
        <div className="mt-1 text-gray-700">Feels like {data.feels}°C • {data.condition}</div>
        <div className="mt-2 text-sm text-gray-600">Humidity: {data.humidity}% • Wind: {data.wind} m/s</div>
      </div>
    </div>
  )
}
