import FriendsTab from 'src/components/shared/Layout/Header/FriendsTab';
import MyMeetingCategory from 'src/components/shared/Layout/Header/MyMeetingCategory';

type ChildrenType = {
  children: JSX.Element;
  url: string;
};

const headerChilderen: ChildrenType[] = [
  {
    children: <MyMeetingCategory />,
    url: '/mymeeting',
  },
  {
    children: <FriendsTab />,
    url: '/friends',
  },
];

export default headerChilderen;
