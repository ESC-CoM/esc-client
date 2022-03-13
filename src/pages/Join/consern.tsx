import { PageLayout } from '../../components/Layout';
import { Concern } from '../../components/Join';

function ConcernPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Concern />
    </PageLayout>
  );
}

export default ConcernPage;
