import $ from './style.module.scss';
import { useState } from 'react';
import {
  registerMeetingMocks,
  requestListMocks,
} from 'src/__mocks__/myMeeting';
import { RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/Layout';
import { MyMeetingRequestType } from 'src/types/myMeeting';

const { title, content, friends, date } = registerMeetingMocks[0];

export default function RegisterDetailPage() {
  const [requestedMeeting, setRegisterMeeting] = useState<
    MyMeetingRequestType[]
  >([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestedMeeting, ...requestListMocks]);
  };

  return (
    <>
      <div className={$['detail-info']}>
        <div className={$['friends-image-list']}>
          {friends.map(({ nickName, src }, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={`${nickName}의 프로필`}
            />
          ))}
        </div>

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
