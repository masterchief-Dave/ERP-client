import "./App.css";
import AddEmployeeModal from "./components/add-employee-modal";
import EmployeeAnalytics from "./components/chart";
import { employeeColumns } from "./components/employee-table/columns";
import { EmployeeDataTable } from "./components/employee-table/data-table";

const departmentData = [
  { name: "Engineering", headcount: 45 },
  { name: "Sales", headcount: 30 },
  { name: "Marketing", headcount: 20 },
  { name: "HR", headcount: 10 },
  { name: "Operations", headcount: 25 },
];
function App() {
  return (
    <div className="w-full">
      <main className="container mx-auto py-12">
        <div className="space-y-12">
          <div>
            <header className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <AddEmployeeModal />
            </header>
          </div>
          <div>
            <EmployeeDataTable
              columns={employeeColumns}
              data={[
                {
                  id: "728ed52f",
                  salary: 100,
                  firstName: "Samuel",
                  lastName: "Tems",
                  role: "ADMIN",
                  department: "IT",
                  email: "m@example.com",
                  createdAt: new Date(),
                },
                // ...
              ]}
            />
          </div>
          <div className="w-3/5">
            <EmployeeAnalytics departments={departmentData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
