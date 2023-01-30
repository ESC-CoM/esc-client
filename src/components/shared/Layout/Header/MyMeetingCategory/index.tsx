import ChildrenCategory from '../ChildrenCategory';

const category = [
  { name: '등록한 미팅', path: 'register', to: '/mymeeting?status=register' },
  { name: '신청한 미팅', path: 'request', to: '/mymeeting?status=request' },
];

export default function MyMeetingCategory() {
  return <ChildrenCategory target="status" {...{ category }} />;
}
