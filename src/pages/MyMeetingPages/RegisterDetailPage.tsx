import $ from './style.module.scss';
import { useState } from 'react';
import {
  registerMeetingMocks,
  requestedListMocks,
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
    setRegisterMeeting([...requestedMeeting, ...requestedListMocks]);
  };

  return (
    <>
      <div className={$['detail-info']}>
        <div className={$['friends-image-list']}>
          {friends.map((imgUri, index) => (
            <img key={`${imgUri}-${index}`} src={imgUri} alt="friends-image" />
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
          {requestedMeeting.map(
            (
              { chatterIds, chattingRoomName, comment, profileImg, date },
              index
            ) => (
              <RequestedList
                key={`requested-list-${index}`}
                {...{
                  chatterIds,
                  chattingRoomName,
                  comment,
                  profileImg,
                  date,
                }}
              />
            )
          )}
        </ul>
      </InfiniteScroll>
    </>
  );
}
