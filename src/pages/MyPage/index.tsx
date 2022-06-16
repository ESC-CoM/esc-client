import { CardBox } from 'src/components/MyPage';
import { PageLayout } from '../../components/Layout';

export default function MyPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0} headerHeight={44}>
      <CardBox />
    </PageLayout>
  );
}
