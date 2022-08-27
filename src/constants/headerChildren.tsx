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
];

export default headerChilderen;
