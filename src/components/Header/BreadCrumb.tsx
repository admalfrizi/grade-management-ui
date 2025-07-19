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