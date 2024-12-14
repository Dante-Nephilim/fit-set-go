import { useState } from "react";
import { Button } from "@/components/ui/button";

function BMITracker() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const calculateBMI = () => {
    const bmi = weight / (height * height);
    setBmi(bmi);
  };
  return (
    <div>
      <h1>BMI-Tracker</h1>
      <h2>Enter your weight and height</h2>
      <input
        title="weight"
        type="number"
        placeholder="weight"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <input
        title="height"
        type="number"
        placeholder="height"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <Button onClick={calculateBMI}>Calculate and Save your BMI</Button>
      <h3>Your BMI is {bmi}</h3>
    </div>
  );
}

export default BMITracker;
