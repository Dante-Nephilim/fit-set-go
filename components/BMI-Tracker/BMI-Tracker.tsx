import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BMITable from "./BMI-Tracker-Table";
import BMIChart from "./BMI-Tracker-Chart";
import { Label } from "../ui/label";

export type BMIHistory = {
  weight: number;
  height: number;
  bmi: number;
  date: Date;
  id: string;
};

function EmptyState() {
  return (
    <div className="text-center mt-4">
      <h2>You haven&apos;t added your height & weight yet.</h2>
      <h3>Start Adding</h3>
    </div>
  );
}

function BMITracker() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [history, setHistory] = useState<BMIHistory[]>([]);

  const calculateBMI = () => {
    const BMI = Math.floor(weight / (height * height));
    setHistory([...history, { weight: weight, height: height, bmi: BMI, date: new Date(), id: crypto.randomUUID() }]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>BMI History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-5 items-end mb-5">
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              type="number"
              placeholder="Weight"
              value={weight}
              id="weight"
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="height">Height (ft)</Label>
            <Input
              type="number"
              placeholder="Height"
              value={height}
              id="height"
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <Button onClick={() => calculateBMI()}>Calculate and Save your BMI</Button>
        </div>
        <Tabs defaultValue="chart">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chart">Charts</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            {history.length !== 0 && <BMITable data={history} />}
            {history.length === 0 && <EmptyState />}
          </TabsContent>
          <TabsContent value="chart">
            {history.length !== 0 && <BMIChart data={history} />}
            {history.length === 0 && <EmptyState />}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
export default BMITracker;
