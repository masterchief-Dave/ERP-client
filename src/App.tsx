import "./App.css";
import AddEmployeeModal from "./components/add-employee-modal";
// import { AppSidebar } from "./components/app-sidebar";
import UserNav from "./components/navbar";

function App() {
  return (
    <div className="w-full">
      <UserNav />
      <main className="container mx-auto py-12">
        <div className="space-y-12">
          <div>
            <header className="flex items-center justify-end">
              <AddEmployeeModal />
            </header>
          </div>
          <div>
            <header> </header>
            table section
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
