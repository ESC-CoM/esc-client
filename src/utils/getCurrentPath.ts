import { useRouter } from 'next/router';

type Routes = {
  index?: boolean;
  element: JSX.Element;
  path?: string;
}[];

// TODO: hook으로 분리
export const getCurrentPath = (routes: Routes) => {
  const router = useRouter();

  return routes.findIndex(({ path }) => path && router.pathname.includes(path));
};
