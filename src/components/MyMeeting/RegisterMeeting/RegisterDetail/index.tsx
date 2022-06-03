import $ from './style.module.scss';
import { useEffect, useState } from 'react';
import { registerMeetingMocks, requestList } from 'src/__mocks__/myMeeting';
import RequestedList from '../RequestedList';

type meetingInfo = {
  comment: string;
  profileImg: string[];
  date: string;
};

const { title, content, friends, date } = registerMeetingMocks[0];

export default function RegisterDetail() {
  const [requestedList, setRequestedList] = useState<meetingInfo[]>([]);

  useEffect(() => {
    // 요청 fetch
    setRequestedList(requestList);
  }, []);

  return (
    <>
      <div className={$['detail-info']}>
        <ul className={$['friends-image-list']}>
          {friends.map((imgUri, index) => (
            <li
              key={`friends-image-${imgUri}-${index}`}
              className={$['friends-image']}
            >
              <img src={imgUri} alt="friends-image" />
            </li>
          ))}
        </ul>

        <div className={$['info']}>
          <span className={$['title']}>{title}</span>
          <span className={$['date']}>•{date}</span>
          <div>
            <span className={$['content']}>{content}</span>
          </div>
        </div>
      </div>

      <ul>
        {requestedList.map(({ comment, profileImg, date }, index) => (
          <RequestedList
            key={`requested-list-${index}`}
            comment={comment}
            profileImg={profileImg}
            date={date}
          />
        ))}
      </ul>
    </>
  );
}
