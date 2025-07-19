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

// const getKeyFromRoute = (pathname: string): string | null => {
//   for (const key of Object.keys(ROUTES)) {
//     const routeConfig = ROUTES[key];
//     if (typeof routeConfig.route === "string" && routeConfig.route === pathname) {
//       return typeof routeConfig.title === "function"
//         ? routeConfig.title("")
//         : routeConfig.title;
//     }
//   }

//   for (const key of Object.keys(ROUTES)) {
//     const routeConfig = ROUTES[key];

//     if (typeof routeConfig.route === "function") {
//       const testPath = routeConfig.route("");
//       if (pathname.startsWith(testPath)) {
//         const param = pathname.slice(testPath.length);
//         const isSingleSegment = !param.includes("/") && param.length > 0;

//         if (isSingleSegment) {
//           return typeof routeConfig.title === "function"
//             ? routeConfig.title(param)
//             : routeConfig.title;
//         }
//       }
//     }
//   }


//   return null;
// };

export default function Breadcrumb({namePage} : BreadcrumbProps) {
  //const routeName = getKeyFromRoute(namePage);
  const breadCrumbData = generateBreadcrumbs(namePage)

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {breadCrumbData.map((data,index) => {
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