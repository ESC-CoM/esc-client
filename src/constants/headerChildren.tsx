import MyMeetingCategory from 'src/components/shared/Header/MyMeetingCategory';

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
