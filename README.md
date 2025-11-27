# weather-app

**PROMPT TO PASTE IN CURSOR:*

> **You are an expert full-stack engineer. Build me a fully functioning, modern Weather App using React + Vite + TailwindCSS.
> Use clean folder structure and write production-ready code.
> Follow all the specs below:**
>
> ---
>
> ## 🔥 **CORE FEATURES**
>
> * Search weather by **city name**
> * Display **current weather** (temperature, condition, humidity, wind speed, “feels like”)
> * Display **5-day forecast** (date, condition icon, min/max temperature)
> * Automatically detect and load **user location** using browser geolocation
> * Beautiful icons (use **OpenWeather icons** or a free icon set)
>
> ---
>
> ## 🌐 **API**
>
> * Use **OpenWeatherMap API**
> * Use both the **Current Weather API** and **5-Day Forecast API**
> * Store the API key in environment variables (`.env`)
>
> ---
>
> ## 🎨 **UI DESIGN**
>
> * Modern, minimalistic, aesthetic design
> * Use TailwindCSS for styling
> * Use a **glassmorphism** or **soft-gradient** style
> * Responsive: works on phone + tablet + desktop
> * Smooth fade-in animations (Framer Motion optional)
>
> ---
>
> ## 📂 **FOLDER STRUCTURE**
>
> ```
> src/
>   components/
>     SearchBar.jsx
>     CurrentWeather.jsx
>     Forecast.jsx
>     Loader.jsx
>   hooks/
>     useWeather.js
>   services/
>     weatherApi.js
>   utils/
>     formatDate.js
>   assets/
>   App.jsx
>   main.jsx
> ```
>
> ---
>
> ## ⚙️ **FUNCTIONALITY DETAILS**
>
> * When user enters a city and presses search → fetch weather data
> * If city not found → show clean error message
> * Show loading state when fetching
> * Convert Kelvin → Celsius
> * Use reusable components
> * Write clean and commented code
> * Avoid duplication — use helper functions where needed
>
> ---
>
> ## 📱 **BONUS FEATURES (if possible)**
>
> * Change background gradient according to weather (sunny, rainy, cloudy, night)
> * Show local date + time of searched city
> * Dark mode toggle
> * Save recent searches in localStorage
>
> ---
>
> ## 🧪 **Testing**
>
> * Add simple tests for components (optional)
>
> ---
>
> ## 📦 **DELIVERABLES**
>
> * Working full project with all components
> * Instructions on how to run (`npm install` + `npm run dev`)
> * Provide `.env.example` file
> * Provide final explanation of architecture
>
> ---
>
> **Start by scaffolding the React + Vite project, then build each component.
> After generating code, explain how to run the app.**

---
