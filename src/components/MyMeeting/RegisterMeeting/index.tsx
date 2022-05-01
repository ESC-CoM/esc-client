import $ from './style.module.scss';
import { useState } from 'react';
import { requestList } from 'src/__mocks__/myMeeting';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  content: string;
  friends: string[];
  date: string;
}

type meetingInfo = {
  comment: string;
  profileImg: string[];
  date: string;
};

export default function RegisterMeeting({
  title,
  content,
  friends,
  date,
}: Props) {
  const navigate = useNavigate();
  const [requestedList, setRequestedList] = useState<meetingInfo[]>([]);

  const getRequestList = () => {
    // 요청 리스트 fetch
    setRequestedList(requestList);
    navigate('/mymeeting/register-detail');
  };

  return (
    <>
      <div className={$['my-meeting']} onClick={getRequestList}>
        <ul className={$['profile-img-list']}>
          {friends.map((imgUri, index) => (
            <li className={$['profile-img']} key={`profile-img-${index}`}>
              <img src={imgUri} alt="friends" />
            </li>
          ))}
        </ul>

        <div className={$['my-meeting-info']}>
          <span className={$['title']}>{title}</span>
          <span className={$['date']}>•{date}</span>
          <span className={$['content']}>{content}</span>
        </div>
      </div>
    </>
  );
}
