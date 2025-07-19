import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { ROUTES } from '@/lib/route';
import { generateBreadcrumbs } from '@/lib/breadcrumb';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

type BreadcrumbProps = {
  namePage: string
}

const getKeyFromRoute = (pathname: string): string | null => {
    const staticRouteKey = Object.keys(ROUTES).find(key => {
      const routeConfig = ROUTES[key];
      return typeof routeConfig.route === 'string' && routeConfig.route === pathname;
    });

    if (staticRouteKey) {
      // If a static match is found, return its title immediately.
      return ROUTES[staticRouteKey].title as string;
    }

    // --- Pass 2: If no static match, look for a dynamic route match ---
    for (const key in ROUTES) {
      const routeConfig = ROUTES[key];
      if (typeof routeConfig.route === 'function') {
        const basePath = routeConfig.route('');
        if (pathname.startsWith(basePath) && pathname.length > basePath.length) {
          const parameter = pathname.substring(basePath.length);

          if (!parameter.includes('/')) {
            // If a dynamic match is found, resolve its title.
            if (typeof routeConfig.title === 'function') {
              return routeConfig.title(parameter);
            }
            return routeConfig.title;
          }
        }
      }
    }

    // No match found
    return null;
};

export default function Breadcrumb({namePage} : BreadcrumbProps) {
  const routeName = getKeyFromRoute(namePage);
  const breadCrumbData = generateBreadcrumbs(namePage, routeName)

  //console.log("breadcrumb" + JSON.stringify(breadCrumbData))

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {/* <Typography variant="body1">Dashboard</Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
        {routeName}
      </Typography> */}
      {breadCrumbData.map((data, index) => {
        const isLast = index === breadCrumbData.length - 1;

        return !isLast ? 
            (<Typography variant="body1">{data.title}</Typography>) : 
            (<Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
              {data.title}
            </Typography>) 
      })}
    </StyledBreadcrumbs>
  );
}