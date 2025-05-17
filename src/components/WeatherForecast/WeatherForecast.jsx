import './WeatherForecast.css';

const WeatherForecast = ({ forecast, id, onRemove, onToggleDetails }) => {
  return (
    <div className={`weather ${forecast.conditions}`}>
      <h2 onClick={onToggleDetails}>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <div className="details">
        <p><span>Conditions: </span>{forecast.conditions}</p>
        <p><span>Time: </span>{forecast.time}</p>
      </div>
    </div>
  );
};

export default WeatherForecast;
