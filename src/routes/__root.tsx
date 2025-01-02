// import App from "@/App";
import { AppSidebar } from "@/components/app-sidebar";
import UserNav from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import EmployeeDashboardPage from "@/pages/employee-dashboard.page";
import {
  createRootRoute,
  createRoute,
  createRouter,
  // Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const rootRoute = createRootRoute({
  component: () => (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <main className="flex-1">
          <UserNav />
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </SidebarProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <>
        {/* <App /> */}
        <EmployeeDashboardPage />
      </>
    );
  },
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/login",
  component: function Login() {
    return <div>Login Page</div>;
  },
});

const routeTree = rootRoute.addChildren([homeRoute, indexRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
