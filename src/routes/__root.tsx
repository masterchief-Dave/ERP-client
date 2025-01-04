import App from "@/App";
import { AppSidebar } from "@/components/app-sidebar";
import Breadcrumb from "@/components/breadcrumb";
import UserNav from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "@/context/session.provider";
import { useSession } from "@/hooks/use-session";
import LoginPage from "@/pages/auth/login.page";
import EmployeeDashboardPage from "@/pages/employee-dashboard.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  createRoute,
  createRouter,
  // Navigate,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Root route - serves as the base layout
const rootRoute = createRootRoute({
  component: () => (
    <SessionProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Outlet />
        <TanStackRouterDevtools />
      </QueryClientProvider>
    </SessionProvider>
  ),
});

// Protected layout route - for authenticated pages
const protectedLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  component: function ProtectedLayout() {
    // const { session } = useSession();

    // if (session.status === "unauthenticated") {
    //   return <Navigate to="/auth/login" />;
    // }

    // if (session.status === "pending") {
    //   return <div>Loading...</div>;
    // }

    return (
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <main className="flex-1 flex flex-col">
            <UserNav />
            <Breadcrumb />
            <div className="flex-1 p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  },
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
    const { session } = useSession();
    return (
      <>
        {session.user?.role === "employee" ? (
          <EmployeeDashboardPage />
        ) : (
          <App />
        )}
      </>
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
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
