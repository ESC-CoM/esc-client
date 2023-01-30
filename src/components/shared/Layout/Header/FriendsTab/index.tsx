import ChildrenCategory from '../ChildrenCategory';

const category = [
  { name: '친구리스트', path: 'myfriends', to: '/friends/list?kind=myfriends' },
  { name: '요청리스트', path: 'request', to: '/friends/list?kind=request' },
];

export default function FriendsTab() {
  return <ChildrenCategory target="kind" {...{ category }} />;
}
