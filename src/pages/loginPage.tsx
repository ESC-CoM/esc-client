import { PageLayout } from '../components/Layout';
import Login from '../components/Login/Login';

function LoginPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <Login />
    </PageLayout>
  );
}

export default LoginPage;
