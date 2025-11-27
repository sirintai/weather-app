import React from 'react'
import { formatDate } from '../utils/format'

export default function Forecast({ data }) {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
      {data.map(day => (
        <div key={day.date} className="bg-white/40 rounded-lg p-3 text-center">
          <div className="text-sm text-gray-700">{formatDate(day.date)}</div>
          <img src={day.icon} alt={day.condition} className="mx-auto w-16 h-16" />
          <div className="text-sm">{day.min}° / {day.max}°</div>
        </div>
      ))}
    </div>
  )
}
