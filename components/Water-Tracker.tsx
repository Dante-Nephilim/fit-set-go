import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

type WaterIntakeHistory = {
  quantity: number;
  date: Date;
  id: string;
};

const chartConfig = {
  quantity: {
    label: "Quantity",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

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
        <Tabs defaultValue="table" className="w-[600px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="chart">Charts</TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            {history.length !== 0 && (
              <Table>
                <TableCaption>Water Intake History Total : {total} ml</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Quantity(ml)</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((h) => {
                    return (
                      <TableRow key={h.id}>
                        <TableCell>{h.id}</TableCell>
                        <TableCell>{h.quantity}</TableCell>
                        <TableCell>{`${h.date.toLocaleDateString()} ${h.date.toLocaleTimeString()}`}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </TabsContent>

          <TabsContent value="chart">
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={history}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) =>
                    `${(value as Date).toLocaleDateString()} ${(value as Date).toLocaleTimeString()}`
                  }
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="quantity" fill="var(--color-desktop)" radius={8} />
              </BarChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default WaterTracker;
