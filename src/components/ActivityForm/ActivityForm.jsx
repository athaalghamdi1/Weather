import { useState } from "react";
import './ActivityForm.css';

const ActivityForm = ({ onAddActivity }) => {
  const [activity, setActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.trim() === "") return;
    onAddActivity(activity.trim());
    setActivity("");
  };

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <h3>Add a New Activity</h3>
      <input
        type="text"
        placeholder="e.g. 1- run"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;
