import EmployeeCard from "@/components/employee-card";
import UpdateMyProfileModal from "@/components/update-my-profile-modal";

const employeeData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@company.com",
  role: "Senior Developer",
  joinedAt: new Date("2023-01-15"),
  salary: 95000,
  department: "Engineering",
};
const EmployeeDashboardPage = () => {
  return (
    <div className="w-full font-geist">
      <main className="container mx-auto py-12">
        <div className="space-y-12">
          <header className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <UpdateMyProfileModal />
          </header>
          <div>
            <EmployeeCard employee={employeeData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboardPage;
