// import { EmployeeChart } from "@/components/chart";
import EmployeeAnalytics from "@/components/chart";

const departmentData = [
  { name: "Engineering", headcount: 45 },
  { name: "Sales", headcount: 30 },
  { name: "Marketing", headcount: 20 },
  { name: "HR", headcount: 10 },
  { name: "Operations", headcount: 25 },
];
const AnalyticsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="w-3/5">
        <EmployeeAnalytics departments={departmentData} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
