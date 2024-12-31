import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { BMIHistory } from "./BMI-Tracker";

type Props = {
  data: BMIHistory[];
};
const chartConfig = {
  bmi: {
    label: "BMI",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function BMIChart(props: Props) {
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
        <Bar dataKey="bmi" fill="var(--color-desktop)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

export default BMIChart;
