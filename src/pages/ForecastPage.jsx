import { useParams } from 'react-router-dom';
import ActivityForm from '../components/ActivityForm/ActivityForm';

const ForecastPage = ({ forecasts, activitiesMap, onAddActivity }) => {
  const { id } = useParams();
  const forecast = forecasts.find((forecast) => forecast.id === id);

  if (!forecast) {
    return <p>Weather forecast not found!</p>;
  }

  const activities = activitiesMap[id] || [];

  return (
    <div className="forecast-detail">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p><strong>Conditions:</strong> {forecast.conditions}</p>
      <p><strong>Time:</strong> {forecast.time}</p>

      <h3>Planned Activities:</h3>
      <ul>
        {activities.length === 0 ? (
          <p>No activities yet.</p>
        ) : (
          activities.map((activity, index) => <li key={index}>{activity}</li>)
        )}
      </ul>

      <ActivityForm onAddActivity={(activity) => onAddActivity(id, activity)} />
    </div>
  );
};

export default ForecastPage;
