export function kelvinToC(k) {
  return Math.round(k - 273.15)
}

export function formatDate(ts) {
  const d = new Date(ts)
  return d.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
}

export function formatTimeInZone(ts, timezoneOffsetSec) {
  const d = new Date((ts + timezoneOffsetSec) * 1000)
  return d.toLocaleTimeString()
}
