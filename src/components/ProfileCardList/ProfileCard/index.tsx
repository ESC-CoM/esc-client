import { useState, useEffect, memo } from 'react';
import { Profile } from 'src/types/meeting';
import $ from './style.module.scss';
import cx from 'classnames';

type Props = {
  friend: Profile;
  width: number | undefined;
  left: string;
};

function ProfileCard({ friend, width, left }: Props) {
  return (
    <div
      className={$['profile-card']}
      style={{ width: `${width}px`, left: left }}
    >
      <img data-src={friend.img} alt="사진" />
      <span>{friend.mannerScore}</span>
      <span>{friend.gender}</span>
      <span>{friend.birthDate.split('-').join('.')}</span>
      <span>{friend.college}</span>
      <span>{friend.studentNum}</span>
      <span>{friend.height}</span>
      <span>{friend.weight}</span>
      <span>{friend.mbti}</span>
      {friend.hobbies.split('#').map((hobby, index) => {
        if (index) return <span key={`${hobby}-${index}`}>#{hobby}</span>;
      })}
      <span>{friend.drink}병</span>
    </div>
  );
}

export default memo(ProfileCard);
