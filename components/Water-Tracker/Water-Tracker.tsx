import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import WaterTrackerTable from "./Water-Tracker-Table";
import WaterTrackerChart from "./Water-Tracker-Chart";

export type WaterIntakeHistory = {
  quantity: number;
  date: Date;
  id: string;
};

function EmptyState() {
  return (
    <div className="text-center mt-4">
      <h2>You haven&apos;t added any water intake</h2>
      <h3>Start Adding</h3>
    </div>
  );
}
function WaterTracker() {
  const [history, setHistory] = useState<WaterIntakeHistory[]>([]);

  const total = useMemo(() => {
    return history.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0);
  }, [history]);

  function addWaterIntake(quantity: number) {
    setHistory((hist) => [...hist, { quantity: quantity, date: new Date(), id: crypto.randomUUID() }]);
  }

  return (
    <div>
      <h1 className="text-center text-xl m-2">Water Tracker</h1>
      <h2 className="text-center text-xl m-2">Enter your water intake</h2>
      <div className="flex justify-center gap-5">
        <Button onClick={() => addWaterIntake(100)}>+100 ml</Button>
        <Button onClick={() => addWaterIntake(200)}>+200 ml</Button>
        <Button onClick={() => addWaterIntake(500)}>+500 ml</Button>
        <Button onClick={() => addWaterIntake(1000)}>+1000 ml</Button>
      </div>
      <div className="flex justify-center mt-4">
        <Tabs defaultValue="chart" className="w-[600px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="chart">Charts</TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            {history.length !== 0 && <WaterTrackerTable data={history} total={total} />}
            {history.length === 0 && <EmptyState />}
          </TabsContent>

          <TabsContent value="chart">
            {history.length !== 0 && <WaterTrackerChart data={history} />}
            {history.length === 0 && <EmptyState />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default WaterTracker;
