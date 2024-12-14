"use client";

import BMITracker from "@/components/BMI-Tracker";
import FoodIntakeTracker from "@/components/Food-Intake-Tracker";
import SleepTracker from "@/components/Sleep-Tracker";
import WaterTracker from "@/components/Water-Tracker";
import WorkoutTracker from "@/components/Workout-Tracker";

export default function Home() {
  return (
    <>
      <div>
        <BMITracker />
      </div>
      <div>
        <WaterTracker />
      </div>
      <div>
        <SleepTracker />
      </div>
      <div>
        <FoodIntakeTracker />
      </div>
      <div>
        <WorkoutTracker />
      </div>
    </>
  );
}
