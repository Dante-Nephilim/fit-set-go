import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { SleepDurationHistory } from "./Sleep-Tracker";

type Props = {
  data: SleepDurationHistory[];
};
const chartConfig = {
  quantity: {
    label: "Duration",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function SleepTrackerChart(props: Props) {
  const { data } = props;
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => `${(value as Date).toLocaleDateString()} ${(value as Date).toLocaleTimeString()}`}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="duration" fill="var(--color-desktop)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

export default SleepTrackerChart;
