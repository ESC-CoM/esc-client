import { PageLayout } from '../../components/Layout';
import { MoreInfo } from '../../components/Join';

function MoreInfoPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <MoreInfo />
    </PageLayout>
  );
}

export default MoreInfoPage;
