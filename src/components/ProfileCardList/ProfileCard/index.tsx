import { memo } from 'react';
import { Profile } from 'src/types/meeting';
import $ from './style.module.scss';

type Props = {
  friend: Profile;
  profileWidth: number | undefined;
  left: string;
};

function ProfileCard({ friend, profileWidth, left }: Props) {
  return (
    <div
      className={$['profile-card']}
      style={{ width: `${profileWidth}px`, left: left }}
    >
      <div className={$['img-wrapper']}>
        <img src={friend.img} alt="사진" />
      </div>
      <table>
        <tbody>
          <tr>
            <td>매너점수</td>
            <td className={$.bold}>{friend.mannerScore}점</td>
          </tr>
          <tr>
            <td className={friend.gender === '남' ? $.male : $.female}>
              {friend.gender}
            </td>
            <td>{friend.birthDate.split('-')[0]}년생</td>
          </tr>
          <tr>
            <td>{friend.college}</td>
            <td>{friend.studentNum}학번</td>
          </tr>
          <tr>
            <td>{friend.height}cm</td>
            <td>{friend.weight}kg</td>
          </tr>
          <tr>
            <td>MBTI</td>
            <td>{friend.mbti}</td>
          </tr>
          <tr>
            <td>주량</td>
            <td>{friend.drink}병</td>
          </tr>
          <tr>
            <td>취미</td>
            <td className={$.hobbies}>{friend.hobbies}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default memo(ProfileCard);
