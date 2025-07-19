import { ROUTES } from "./route";

type BreadcrumbProps = {
  title: string;
  path: string;
};

export const generateBreadcrumbs = (pathname: string): BreadcrumbProps[] => {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbProps[] = [{ title: 'Dashboard', path: '/' }];

  let currentPath = "";

  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;

    const matchedEntry = Object.entries(ROUTES).find(([_, routeConfig]) => {
      if (typeof routeConfig.route === "string") {
        return routeConfig.route === currentPath;
      }

      if (typeof routeConfig.route === "function") {
        const basePath = routeConfig.route("");
        if (currentPath.startsWith(basePath)) {
          const param = currentPath.slice(basePath.length);
          return param !== "" && !param.includes("/");
        }
      }

      return false;
    });

    if (matchedEntry) {
      const [_, routeConfig] = matchedEntry;

      if (typeof routeConfig.route === "function") {
        const basePath = routeConfig.route("");
        const param = currentPath.slice(basePath.length);
        const title = typeof routeConfig.title === "function"
          ? routeConfig.title(param)
          : routeConfig.title;
        breadcrumbs.push({title: title, path: currentPath});
      } else {
        const title = typeof routeConfig.title === "function"
          ? routeConfig.title("")
          : routeConfig.title;
        breadcrumbs.push({title: title, path: currentPath});
      }
    } else {
      breadcrumbs.push({title: "", path: segments[i]});
    }
  }

  return breadcrumbs;
};