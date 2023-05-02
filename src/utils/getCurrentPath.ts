import { useRouter } from 'next/router';

type Routes = {
  index?: boolean;
  element: JSX.Element;
  path?: string;
}[];

export const getCurrentPath = (routes: Routes) => {
  const router = useRouter();

  return routes.findIndex(({ path }) => path && router.pathname.includes(path));
};
