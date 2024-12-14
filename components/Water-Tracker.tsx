import { useState } from "react";

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useState<number>(0);

  const saveWaterIntake = () => {
    console.log(waterIntake);
  };
  return (
    <div>
      <h1>Water Tracker</h1>
      <h2>Enter your water intake</h2>
      <input
        type="number"
        placeholder="Water intake"
        title="water intake"
        value={waterIntake}
        onChange={(e) => setWaterIntake(Number(e.target.value))}
      />
      <button onClick={saveWaterIntake}>Save your water intake</button>
    </div>
  );
}

export default WaterTracker;
