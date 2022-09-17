import { useLocation } from 'react-router-dom';

type Routes = {
  index?: boolean;
  element: JSX.Element;
  path?: string;
}[];

export const getCurrentPath = (routes: Routes) => {
  const location = useLocation();

  return routes.findIndex(
    ({ path }) => path && location.pathname.includes(path)
  );
};
