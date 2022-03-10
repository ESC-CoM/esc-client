import { PageLayout } from '../components/Layout';
import Counter from '../components/Counter/Counter';

function CounterPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Counter />
      <Counter />
    </PageLayout>
  );
}

export default CounterPage;
