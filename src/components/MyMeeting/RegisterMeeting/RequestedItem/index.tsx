import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import MutiProfile from 'src/components/shared/MultiProfile';

import $ from './style.module.scss';

type Props = res.RequestListForMeetingRegisteredByMeContent & {
  onAllowClick: () => void;
  onRejectClick: () => void;
};

function RequestedItem(props: Props) {
  const { requestBoardId, title, createdAt, requestParticipants } = props;
  const { onAllowClick, onRejectClick } = props;
  const router = useRouter();
  const profileList = useMemo(
    () =>
      requestParticipants
        .map(({ nickname, profileImage }) => ({
          alt: nickname,
          src: profileImage,
        }))
        .slice(0, 3),
    []
  );

  const getProfileInfo = () => {
    router.push('/home/detail/' + requestBoardId);
  };

  const clickAcceptBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onAllowClick();
  };
  const clickRefuseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onRejectClick();
  };

  return (
    <li className={$['requested-info']} onClick={getProfileInfo}>
      <MutiProfile profileList={profileList} />

      <div className={$.info}>
        <span className={$.comment}>{title}</span>
        <span className={$.date}>{createdAt}</span>
      </div>

      <div className={$['request-btn-wrapper']}>
        <button className={$['accept-btn']} onClick={clickAcceptBtn}>
          수락
        </button>
        <button className={$['refuse-btn']} onClick={clickRefuseBtn}>
          거절
        </button>
      </div>
    </li>
  );
}

export default memo(RequestedItem);
