import $ from './style.module.scss';
import { useRef, useState } from 'react';
import {
  registerMeetingMocks,
  requestListMocks,
} from 'src/__mocks__/myMeeting';
import { RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingRequestType } from 'src/types/myMeeting';
import MutiProfile from 'src/components/shared/MultiProfile';

const { title, content, friends, date } = registerMeetingMocks[0];

export default function RegisterDetailPage() {
  const [requestedMeeting, setRegisterMeeting] = useState<
    MyMeetingRequestType[]
  >([]);
  const detailInfoRef = useRef<HTMLLIElement | null>(null);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestedMeeting, ...requestListMocks]);
  };

  return (
    <>
      <div className={$['detail-info']}>
        <MutiProfile
          profileList={friends.map(({ src, nickName }) => ({
            src,
            alt: nickName,
          }))}
          parentRef={detailInfoRef}
        />

        <div className={$['info']}>
          <div>
            <span className={$['title']}>{title}</span>
            <span className={$['date']}>•{date}</span>
          </div>
          <span className={$['content']}>{content}</span>
        </div>
      </div>

      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {requestedMeeting.map(({ comment, profileImg, date }, index) => (
            <RequestedList
              key={`requested-list-${index}`}
              {...{ comment, profileImg, date }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
