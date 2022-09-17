import $ from './style.module.scss';
import { useMemo, useRef, useState } from 'react';
import {
  registerMeetingMocks,
  requestListMocks,
} from 'src/__mocks__/myMeeting';
import { RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingRequestType } from 'src/types/myMeeting';
import MutiProfile from 'src/components/shared/MultiProfile';
import { useNavigate } from 'react-router-dom';
import Badge from 'src/components/MyMeeting/Badge';

const { kind, title, content, friends, date } = registerMeetingMocks[0];

export default function RegisterDetailPage() {
  const navigate = useNavigate();
  const [requestedMeeting, setRegisterMeeting] = useState<
    MyMeetingRequestType[]
  >([]);
  const detailInfoRef = useRef<HTMLLIElement | null>(null);
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

  const onClickRequestedPosting = () => {
    navigate('/home/detail');
  };

  return (
    <>
      <div className={$['detail-info']} onClick={onClickRequestedPosting}>
        <MutiProfile profileList={profileList} parentRef={detailInfoRef} />

        <div className={$['info']}>
          <Badge text={kind} />
          <div>
            <span className={$['title']}>{title}</span>
            <span className={$['date']}>•{date}</span>
          </div>
          <span className={$['content']}>{content}</span>
        </div>
      </div>

      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {requestedMeeting.map(({ comment, requestedInfo, date }, index) => (
            <RequestedList
              key={`requested-list-${index}`}
              {...{ comment, requestedInfo, date }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
