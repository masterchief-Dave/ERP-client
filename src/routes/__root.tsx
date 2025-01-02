import App from "@/App";
import { AppSidebar } from "@/components/app-sidebar";
import UserNav from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
    return <App />;
  },
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/login",
  component: function Login() {
    return <div>Login Page</div>;
  },
});

const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analytics",
  component: function Analytics() {
    return <div>Analytics Page</div>;
  },
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  indexRoute,
  analyticsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
