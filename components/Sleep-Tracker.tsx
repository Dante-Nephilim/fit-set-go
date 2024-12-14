import { useState } from "react";

function SleepTracker() {
  const [sleepDuration, setSleepDuration] = useState<number>(0);

  const saveSleepDuration = () => {
    console.log(sleepDuration);
  };
  return (
    <div>
      <h1>Sleep Tracker</h1>
      <h2>Enter your sleep duration</h2>
      <input
        type="number"
        placeholder="Sleep duration"
        title="sleep duration"
        value={sleepDuration}
        onChange={(e) => setSleepDuration(Number(e.target.value))}
      />
      <button onClick={saveSleepDuration}>Save your sleep duration</button>
    </div>
  );
}

export default SleepTracker;
