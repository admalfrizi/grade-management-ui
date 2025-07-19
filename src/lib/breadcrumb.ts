type BreadcrumbProps = {
  title: string;
  path: string;
};

export const generateBreadcrumbs = (pathname: string, title: string | null): BreadcrumbProps[] => {
  const homeCrumb: BreadcrumbProps = { title: 'Dashboard', path: '/' };
  
  if (pathname === '/') {
    return [homeCrumb];
  }
  
  const breadcrumbs: BreadcrumbProps[] = [homeCrumb];
  
  const pathSegments = pathname.split('/').filter(Boolean);
  
  let currentPath = '';
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    //const title = getTitleFromRoute(currentPath);

    if (title) {
      breadcrumbs.push({ title, path: currentPath });
    }
  });

  return breadcrumbs;
};