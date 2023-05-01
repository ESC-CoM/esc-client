import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getMyInfo } from 'src/api/user';
import { CardBox } from 'src/components/MyPage';
import { queryKey } from 'src/constants/queryKey';

import { PageLayout } from '../../components/shared/Layout';

export default function MyPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <CardBox />
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(queryKey.myInfo, () => getMyInfo());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
