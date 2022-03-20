import { PageLayout } from '../../components/Layout';
import { MoreInfo } from '../../components/Join';

function MoreInfosPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <MoreInfo />
    </PageLayout>
  );
}

export default MoreInfosPage;
