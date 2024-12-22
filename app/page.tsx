"use client";

import SleepTracker from "@/components/Sleep-Tracker/Sleep-Tracker";
import WaterTracker from "@/components/Water-Tracker/Water-Tracker";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 m-5">
        <WaterTracker />
        <SleepTracker />
      </div>
    </>
  );
}
