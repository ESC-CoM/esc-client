import { profileList } from './mutiProfile';

const messageInfoMocks = [
  {
    sender: {
      id: 'loginid',
      name: '나',
      imagePath: '',
    },
    content: '안녕하세요',
    date: '오후 05:15',
  },
  {
    sender: {
      id: 'other',
      name: '사과먹는 춘식이',
      imagePath:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMjdfMzMg%2FMDAxNTcyMTczNDAwMjc0.-zTktpIp7v4OuhrkU2OLCmR1yxPqTFTTQ3NMHoz9-Csg.x04PhKOmPSawfE07xN5uBlURiDdeHcIZ4i73gp7wB7Ug.JPEG.lucy3622%2F1572173398894.jpg&type=sc960_832',
    },
    content: '반가워요~',
    date: '오후 05:16',
  },
  {
    sender: {
      id: 'other',
      name: '둥둥 라이언',
      imagePath:
        'https://user-images.githubusercontent.com/63364990/202516959-9af74ecb-ae3b-4e4d-a33e-f8ba2b9716fd.jpeg',
    },
    content: '어느 과이신가요?',
    date: '오후 05:45',
  },
  {
    sender: {
      id: 'other',
      name: '책읽는 튜브',
      imagePath:
        'https://img.mbn.co.kr/filewww/news/other/2019/12/30/015331923331.jpg',
    },
    content: '저희는 소웨에요',
    date: '오후 06:06',
  },
  {
    sender: { id: 'loginid', name: '나', imagePath: '' },
    content: '저희 컴공입니다ㅎㅎ',
    date: '오후 06:21',
  },
  {
    sender: {
      id: 'loginid',
      name: '나',
      imagePath: '',
    },
    content: '어디서 언제 볼까요??',
    date: '오후 06:21',
  },
];

const chatListMocks = [
  {
    id: 1,
    roomImage: profileList,
    title: '소프트웨어학과 남자 3명',
    content: '채팅방이 생성되었어요!',
    time: '오후 12:25',
    count: '1',
  },
  {
    id: 2,
    roomImage: profileList,
    title: '심리학과 남자 4명',
    content:
      'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    time: '오후 2:18',
    count: '23',
  },
  {
    id: 3,
    roomImage: profileList.slice(1).reverse(),
    title: '간호학과 남자 2명',
    content: '안녕하세용',
    time: '오전 1:35',
    count: '5',
  },
  {
    id: 4,
    roomImage: profileList.reverse(),
    title: '화학과 남자 3명',
    content: '우와 :)',
    time: '오전 3:05',
    count: '300+',
  },
];

export { chatListMocks, messageInfoMocks };
