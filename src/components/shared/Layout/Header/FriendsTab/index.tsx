import ChildrenCategory from '../ChildrenCategory';

const category = [
  { name: '친구리스트', path: 'myfriends', to: '/friends?kind=myfriends' },
  { name: '요청리스트', path: 'request', to: '/friends?kind=request' },
];

export default function FriendsTab() {
  return <ChildrenCategory target="kind" {...{ category }} />;
}
