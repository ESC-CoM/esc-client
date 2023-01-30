import ProfileCard from 'src/components/Meeting/MeetingDetail/ProfileCardList/ProfileCard';

import $ from './style.module.scss';

type Props = {
  friends: res.Profile[];
};

function ProfileCardList({ friends }: Props) {
  return (
    <section className={$['friends-slides']}>
      {friends.map((friend) => (
        <ProfileCard key={friend.profileImage} friend={friend} />
      ))}
    </section>
  );
}

export default ProfileCardList;
