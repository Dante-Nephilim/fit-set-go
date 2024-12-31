import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BMITable from "./BMI-Tracker-Table";
import BMIChart from "./BMI-Tracker-Chart";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

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
  const [weight, setWeight] = useState<number>(60);
  const [height, setHeight] = useState<number>(5.5);
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
        <Dialog>
          <div className="flex justify-center mb-5">
            <DialogTrigger asChild>
              <Button>Calculate and Save your BMI</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Weight & Height</DialogTitle>
              <DialogDescription>
                Make sure to add your weight and height before calculating your BMI.
              </DialogDescription>
            </DialogHeader>
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
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" disabled={weight === 0 || height === 0} onClick={() => calculateBMI()}>
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
