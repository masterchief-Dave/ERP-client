import React from "react";
import { Link, useMatches } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

// interface BreadcrumbItem {
//   title: string;
//   path: string;
// }

const Breadcrumb = () => {
  const matches = useMatches();
  // const router = useRouter();

  // Filter out auth routes and create breadcrumb items
  const breadcrumbs = matches
    .filter(
      (match) => match.routeId !== "/auth" && match.routeId !== "__root__"
    )
    .map((match) => {
      let title = match.routeId.split("/").pop() || "";
      // Capitalize and clean up the route ID
      title = title.charAt(0).toUpperCase() + title.slice(1).replace(/-/g, " ");

      return {
        title: title === "Protected" ? "Dashboard" : title,
        path: match.pathname,
      };
    });

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground px-6 py-4">
      <Link
        to="/"
        className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>

      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path + index}>
          <ChevronRight className="h-4 w-4" />
          <Link
            to={breadcrumb.path}
            className={`hover:text-primary transition-colors ${
              index === breadcrumbs.length - 1
                ? "font-medium text-foreground pointer-events-none"
                : ""
            }`}
          >
            {breadcrumb.title}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
