"use client";

import BMITracker from "@/components/BMI-Tracker/BMI-Tracker";
import SleepTracker from "@/components/Sleep-Tracker/Sleep-Tracker";
import { Button } from "@/components/ui/button";
import WaterTracker from "@/components/Water-Tracker/Water-Tracker";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="flex justify-center items-center text-4xl mt-10 mb-10">Welcome to Fit-Set-Go</h1>
      <div className="flex justify-center items-center text-4xl mt-10 mb-10">
        <a href="https://github.com/Dante-nephilim/fit-set-go" target="_blank" rel="noopener noreferrer">
          <Button>
            <Github /> View on GitHub
          </Button>
        </a>
      </div>
      <div className="flex justify-center gap-4 m-5">
        <WaterTracker />
        <SleepTracker />
      </div>
      <div className="flex justify-center gap-4 m-5">
        <BMITracker />
      </div>
    </>
  );
}
