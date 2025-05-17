import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import ActivityForm from './components/ActivityForm/ActivityForm';
import ForecastPage from './pages/ForecastPage';  

const App = () => {
  const navigate = useNavigate();
  const [weatherForecasts, setWeatherForecasts] = useState([
    {
      id: '1',
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      id: '2',
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      id: '3',
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      id: '4',
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      id: '5',
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ]);

  const [activitiesMap, setActivitiesMap] = useState({});

  const addActivityForDay = (dayId, activity) => {
    setActivitiesMap((prev) => ({
      ...prev,
      [dayId]: [...(prev[dayId] || []), activity],
    }));
  };

  const removeForecast = (id) => {
    setWeatherForecasts(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Local Weather</h1>

      <Routes>
        
        <Route
          path="/"
          element={
            <section className="forecast-section">
              {weatherForecasts.map((forecast) => (
                <WeatherForecast
                  key={forecast.id}
                  id={forecast.id}
                  forecast={forecast}
                  onRemove={removeForecast}
                  onToggleDetails={() => navigate(`/forecast/${forecast.id}`)}
                />
              ))}
            </section>
          }
        />

        
        <Route
          path="/forecast/:id"
          element={
            <ForecastPage
              forecasts={weatherForecasts}
              activitiesMap={activitiesMap}
              onAddActivity={addActivityForDay}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
