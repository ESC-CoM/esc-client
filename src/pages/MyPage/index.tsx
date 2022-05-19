import { CardBox } from 'src/components/MyPage';
import { MyPage as Header } from 'src/components/Header';
import { PageLayout } from '../../components/Layout';

export default function MyPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Header />
      <CardBox />
    </PageLayout>
  );
}
