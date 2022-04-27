import $ from './style.module.scss';
import { useState } from 'react';
import { requestList } from 'src/__mocks__/myMeeting';
import RequestedList from './RequestedList';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import cx from 'classnames';

interface Props {
  title: string;
  content: string;
  friends: string[];
  date: string;
}

type meetingInfo = {
  title: string;
  content: string;
  profileImg: string[];
  date: string;
};

export default function RegisterMeeting({
  title,
  content,
  friends,
  date,
}: Props) {
  const [isVisibleRequestedList, setIsVisibleRequestedList] =
    useState<boolean>(false);
  const [requestedList, setRequestedList] = useState<meetingInfo[]>([]);

  const getRequestList = () => {
    // 요청 리스트 fetch
    setRequestedList(requestList);
    setIsVisibleRequestedList(!isVisibleRequestedList);
  };

  return (
    <li>
      <div
        className={cx($['my-meeting'], { [$['open']]: isVisibleRequestedList })}
        onClick={getRequestList}
      >
        <ul className={$['profile-img-list']}>
          {friends.map((imgUri, index) => (
            <li className={$['profile-img']} key={`profile-img-${index}`}>
              <img src={imgUri} alt="friends" />
            </li>
          ))}
        </ul>

        <div className={$['my-meeting-info']}>
          <span className={$['title']}>{title}</span>
          <span className={$['content']}>{content}</span>
          <span className={$['date']}>{date}</span>
        </div>

        <span className={$['icon-allow']}>
          {!isVisibleRequestedList ? <FiChevronDown /> : <FiChevronUp />}
        </span>
      </div>

      <div>
        {isVisibleRequestedList && (
          <ul className={$['requested-list']}>
            {requestedList.map(
              ({ title, content, profileImg, date }, index) => (
                <RequestedList
                  key={`requested-list-${index}`}
                  title={title}
                  content={content}
                  profileImg={profileImg}
                  date={date}
                />
              )
            )}
          </ul>
        )}
      </div>
    </li>
  );
}
