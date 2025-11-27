import React from 'react'

export default function SearchBar({ value, onChange, onSearch, recent, onSelect, onClearRecent }) {
  return (
    <div>
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search city..."
          className="flex-1 p-3 rounded-lg bg-white/80 border border-gray-200 focus:outline-none"
          onKeyDown={(e) => { if (e.key === 'Enter') onSearch() }}
        />
        <button onClick={onSearch} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Search</button>
      </div>

      {recent && recent.length > 0 && (
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            {recent.map(r => (
              <button key={r} onClick={() => onSelect(r)} className="text-sm px-3 py-1 bg-white/50 rounded-full">{r}</button>
            ))}
          </div>
          <button onClick={onClearRecent} className="text-sm text-red-500">Clear</button>
        </div>
      )}
    </div>
  )
}
