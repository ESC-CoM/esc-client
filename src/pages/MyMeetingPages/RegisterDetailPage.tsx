import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  registerMeetingMocks,
  requestListMocks,
} from 'src/__mocks__/myMeeting';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingRequestType } from 'src/types/myMeeting';

const { id, kind, title, content, friends, date } = registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content, date };

export default function RegisterDetailPage() {
  const navigate = useNavigate();
  const [requestedMeeting, setRegisterMeeting] = useState<
    MyMeetingRequestType[]
  >([]);

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
    navigate('/home/detail/' + id);
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
          {requestedMeeting.map(
            ({ id, comment, requestedInfo, date }, index) => (
              <RequestedList
                key={`requested-list-${index}`}
                {...{ id, comment, requestedInfo, date }}
              />
            )
          )}
        </ul>
      </InfiniteScroll>
    </>
  );
}
