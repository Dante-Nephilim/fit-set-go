import { useState } from "react";

function FoodIntakeTracker() {
  const [foodIntake, setFoodIntake] = useState<number>(0);
  const [calorificValue, setCalorificValue] = useState<number>(0);

  const calculateCalorificValue = () => {
    console.log(foodIntake);
  };

  return (
    <div>
      <h1>Food Intake Tracker</h1>
      <h2>Enter your food intake</h2>
      <input
        type="number"
        placeholder="Food intake"
        title="food intake"
        value={foodIntake}
        onChange={(e) => setFoodIntake(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Calorific value"
        title="calorific value"
        value={calorificValue}
        onChange={(e) => setCalorificValue(Number(e.target.value))}
      />
      <button onClick={() => calculateCalorificValue()}>Save your food intake</button>
    </div>
  );
}

export default FoodIntakeTracker;
