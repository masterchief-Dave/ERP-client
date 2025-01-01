import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppSidebar } from "./components/app-sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full">
        <AppSidebar />
        <div className="w-full">
          <App />
        </div>
      </div>
    </SidebarProvider>
  </StrictMode>
);
