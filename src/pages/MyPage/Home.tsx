import { CardBox } from 'src/components/MyPage';

import { PageLayout } from '../../components/shared/Layout';

export default function Home() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <CardBox />
    </PageLayout>
  );
}