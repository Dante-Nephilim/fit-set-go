import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SleepTrackerTable from "./Sleep-Tracker-Table";
import SleepTrackerChart from "./Sleep-Tracker-Chart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export type SleepDurationHistory = {
  duration: number;
  date: Date;
  id: string;
};

function EmptyState() {
  return (
    <div className="text-center mt-4">
      <h2>You haven&apos;t added any sleep duration yet.</h2>
      <h3>Start Adding</h3>
    </div>
  );
}
function SleepTracker() {
  const [history, setHistory] = useState<SleepDurationHistory[]>([]);

  const total = useMemo(() => {
    return history.reduce((acc, current) => {
      return acc + current.duration;
    }, 0);
  }, [history]);

  function addSleepIntake(duration: number) {
    setHistory((hist) => [...hist, { duration: duration, date: new Date(), id: crypto.randomUUID() }]);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Duration</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex justify-center gap-5">
            <Button onClick={() => addSleepIntake(1)}>+1 hr</Button>
            <Button onClick={() => addSleepIntake(2)}>+2 hr</Button>
            <Button onClick={() => addSleepIntake(5)}>+5 hr</Button>
            <Button onClick={() => addSleepIntake(10)}>+10 hr</Button>
          </div>
          <div className="flex justify-center mt-4">
            <Tabs defaultValue="chart" className="w-[600px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="chart">Charts</TabsTrigger>
              </TabsList>

              <TabsContent value="table">
                {history.length !== 0 && <SleepTrackerTable data={history} total={total} />}
                {history.length === 0 && <EmptyState />}
              </TabsContent>

              <TabsContent value="chart">
                {history.length !== 0 && <SleepTrackerChart data={history} />}
                {history.length === 0 && <EmptyState />}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SleepTracker;
