import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

// Define the data structure
interface DepartmentData {
  name: string;
  headcount: number;
}

interface EmployeeAnalyticsProps {
  departments: DepartmentData[];
}

const chartConfig = {
  headcount: {
    label: "Department",
    color: "#000",
  },
  name: {
    label: "Name",
    color: "#000",
  },
} satisfies ChartConfig;

const EmployeeAnalytics = ({ departments }: EmployeeAnalyticsProps) => {
  // Calculate total employees
  const totalEmployees = departments.reduce(
    (sum, dept) => sum + dept.headcount,
    0
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Employee Analytics</CardTitle>
        <p className="text-sm text-muted-foreground">
          Total Employees: {totalEmployees}
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={departments}
              accessibilityLayer
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                // tickFormatter={(value) => value.slice(0, 5)}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="headcount"
                fill="var(--color-desktop)"
                radius={[4, 4, 0, 0]}
                name="Employees"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default EmployeeAnalytics;
