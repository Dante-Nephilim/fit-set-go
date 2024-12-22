import { useState } from "react";

function WorkoutTracker() {
  const [workout, setWorkout] = useState<string>("");
  const [workoutTime, setWorkoutTime] = useState<number>(0);

  const calculateCaloriesBurnt = () => {
    console.log(workout);
    console.log(workoutTime);
  };
  return (
    <div>
      <h1>Workout Tracker</h1>
      <h2>Enter your workout</h2>
      <input
        type="text"
        placeholder="Workout"
        title="workout"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      />
      <input
        type="number"
        placeholder="Workout time"
        title="workout time"
        value={workoutTime}
        onChange={(e) => setWorkoutTime(Number(e.target.value))}
      />
      <button onClick={() => calculateCaloriesBurnt()}>Calculate and save your calories burnt</button>
    </div>
  );
}

export default WorkoutTracker;
