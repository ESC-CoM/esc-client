import {
  Header,
  MannerScoreBar,
  Menus,
  MyInformationBar,
} from 'src/components/MyPage';
import { PageLayout } from '../../components/Layout';

export default function MyPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Header />
      <section>
        <MyInformationBar />
      </section>
      <section>
        <MannerScoreBar />
      </section>
      <section>
        <Menus />
      </section>
    </PageLayout>
  );
}
