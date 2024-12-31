import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import WaterTrackerTable from "./Water-Tracker-Table";
import WaterTrackerChart from "./Water-Tracker-Chart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { fitSetGoActions } from "@/store/slice/slice";
import { selectWaterIntakeHistory, selectWaterIntakeHistoryTotal } from "@/store/selectors/selector";
import { useSelector, useDispatch } from "react-redux";

export type WaterIntakeHistory = {
  quantity: number;
  date: string;
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
  const history = useSelector(selectWaterIntakeHistory);
  const total = useSelector(selectWaterIntakeHistoryTotal);
  const dispatch = useDispatch();

  function addWaterIntake(quantity: number) {
    dispatch(
      fitSetGoActions.addWaterIntake({ quantity: quantity, date: new Date().toISOString(), id: crypto.randomUUID() })
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Intake</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex justify-center gap-5 flex-wrap mb-5">
            <Button onClick={() => addWaterIntake(100)}>+100 ml</Button>
            <Button onClick={() => addWaterIntake(200)}>+200 ml</Button>
            <Button onClick={() => addWaterIntake(500)}>+500 ml</Button>
            <Button onClick={() => addWaterIntake(1000)}>+1000 ml</Button>
          </div>
          <Tabs defaultValue="chart">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chart">Charts</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
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
      </CardContent>
    </Card>
  );
}

export default WaterTracker;
