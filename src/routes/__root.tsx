import { AppSidebar } from "@/components/app-sidebar";
import UserNav from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import LoginPage from "@/pages/auth/login.page";
import EmployeeDashboardPage from "@/pages/employee-dashboard.page";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Root route - serves as the base layout
const rootRoute = createRootRoute({
  component: () => (
    <Outlet /> // This will render either the protected layout or the auth layout
  ),
});

// Protected layout route - for authenticated pages
const protectedLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
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

// Auth layout route - for authentication pages
const authLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: () => (
    <div className="min-h-screen">
      <Outlet />
    </div>
  ),
});

// Dashboard route - child of protected layout
const dashboardRoute = createRoute({
  getParentRoute: () => protectedLayoutRoute,
  path: "/",
  component: function Dashboard() {
    return (
      // You can implement your role-based logic here
      <EmployeeDashboardPage />
    );
  },
});

// Login route - child of auth layout
const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/login",
  component: function Login() {
    return (
      <div className="h-screen max-h-screen">
        <main className="">
          <LoginPage />
        </main>
      </div>
    );
  },
});

// Build the route tree
const routeTree = rootRoute.addChildren([
  protectedLayoutRoute.addChildren([dashboardRoute]),
  authLayoutRoute.addChildren([loginRoute]),
]);

const router = createRouter({
  routeTree,
  // You can add default configuration here
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
