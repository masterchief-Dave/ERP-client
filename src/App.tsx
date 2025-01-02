import "./App.css";
import AddEmployeeModal from "./components/add-employee-modal";
import { employeeColumns } from "./components/employee-table/columns";
import { EmployeeDataTable } from "./components/employee-table/data-table";

function App() {
  return (
    <div className="w-full">
      <main className="container mx-auto py-12">
        <div className="space-y-12">
          <div>
            <header className="flex items-center justify-end">
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
        </div>
      </main>
    </div>
  );
}

export default App;
