import { CardBox } from 'src/components/MyPage';
import { useGetUserValidationId } from 'src/hooks/api/auth';
import { useGetUserDetailInformation } from 'src/hooks/api/user';

import { PageLayout } from '../../components/shared/Layout';

export default function Home() {
  const {
    data: userId,
    isLoading: isUserIdLoading,
    isError: isUserIdError,
  } = useGetUserValidationId();

  const {
    data: userDetailInformation,
    isLoading: isUserDetailInformationLoading,
    isError: isUserDetailInformationError,
  } = useGetUserDetailInformation(userId as number);

  // TODO: 로딩, 에러 처리
  if (isUserIdLoading) return <div>유저 식별중</div>;
  if (isUserIdError) return <div>유저 식별 실패</div>;
  if (!userId) return <div>유저 아이디 없음</div>;
  if (isUserDetailInformationLoading) return <div>유저 정보 불러오는중</div>;
  if (isUserDetailInformationError) return <div>유저 정보 불러오기 실패</div>;
  if (!userDetailInformation) return <div>유저 정보 없음</div>;

  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <CardBox userInfo={userDetailInformation} />
    </PageLayout>
  );
}
