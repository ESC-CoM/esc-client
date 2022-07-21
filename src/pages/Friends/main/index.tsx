import { PageLayout } from 'src/components/Layout';
import { BiSearch } from 'react-icons/bi';
import friends from 'src/__mocks__/friends';
import $ from './style.module.scss';
import { NavLink } from 'react-router-dom';

export default function Friends() {
  return (
    <PageLayout isNeedFooter headerHeight={44}>
      <div className={$['search-box']}>
        <input className={$.input} type="text" placeholder="검색" />
        <BiSearch className={$.icon} />
      </div>
      {friends.map(({ imageURL, name }, index) => (
        <NavLink to="" className={$['friend-bar']} key={`${name}${index}`}>
          <img
            className={$['profile-image']}
            src={imageURL}
            alt={`${name}의 프로필 사진`}
          />
          <span>{name}</span>
        </NavLink>
      ))}
    </PageLayout>
  );
}
