import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { WaterIntakeHistory } from "./Water-Tracker";

type Props = {
  data: WaterIntakeHistory[];
};
const chartConfig = {
  quantity: {
    label: "Quantity",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function WaterTrackerChart(props: Props) {
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
          tickFormatter={(value) => `${new Date(value).toLocaleDateString()} ${new Date(value).toLocaleTimeString()}`}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="quantity" fill="var(--color-desktop)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

export default WaterTrackerChart;
