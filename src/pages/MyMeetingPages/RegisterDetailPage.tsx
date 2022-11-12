import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  registerMeetingMocks,
  requestListMocks,
} from 'src/__mocks__/myMeeting';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import {
  usePatchAllowRequest,
  usePatchRejectRequest,
} from 'src/hooks/api/board';
import { MyMeetingRequestType } from 'src/types/myMeeting';

const { kind, title, content, friends, date } = registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content, date };

export default function RegisterDetailPage() {
  const navigate = useNavigate();
  const [requestedMeeting, setRegisterMeeting] = useState<
    MyMeetingRequestType[]
  >([]);
  const { mutate: allowRequest } = usePatchAllowRequest(0);
  const { mutate: rejectRequest } = usePatchRejectRequest(0);

  const profileList = useMemo(
    () =>
      friends
        .map(({ src, nickName }) => ({
          src,
          alt: nickName,
        }))
        .slice(0, 3),
    []
  );

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestedMeeting, ...requestListMocks]);
  };

  const getProfileInfo = () => {
    navigate('/home/detail');
  };

  return (
    <>
      <PostCard
        className="detail"
        profileList={profileList}
        textInfo={detailInfo}
        onClick={getProfileInfo}
      />

      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {requestedMeeting.map(({ comment, requestedInfo, date }, index) => (
            <RequestedList
              key={`requested-list-${index}`}
              onAllowClick={() => allowRequest(0)}
              onRejectClick={() => rejectRequest(0)}
              {...{ comment, requestedInfo, date }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
