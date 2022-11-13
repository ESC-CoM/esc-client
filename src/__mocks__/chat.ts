import { profileList } from './mutiProfile';

export const messageInfoMocks = [
  {
    sender: {
      senderId: 1,
      name: '나',
      imagePath: '',
    },
    message: '안녕하세요~',
    date: '오후 05:15',
    isMe: true,
  },
  {
    sender: {
      senderId: 2,
      name: '프렌즈1',
      imagePath:
        'https://cphoto.asiae.co.kr/listimglink/6/2022022115112252412_1645423882.png',
    },
    message: '반가워요~',
    date: '오후 05:16',
    isMe: false,
  },
  {
    sender: {
      senderId: 3,
      name: '프렌즈2',
      imagePath:
        'https://media.bunjang.co.kr/product/166788639_1_1634025108_w360.jpg',
    },
    message: '어느 과이신가요?',
    date: '오후 05:16',
    isMe: false,
  },
  {
    sender: {
      senderId: 4,
      name: '프렌즈3',
      imagePath:
        'https://data.ygosu.com/editor/attach/20180420/20180420132150_dovqlksp.jpg',
    },
    message: '저는 간호학과입니다!',
    date: '오후 06:20',
    isMe: false,
  },
  {
    sender: { senderId: 1, name: '나', imagePath: '' },
    message: '안녕하세요!!',
    date: '오전 09:15',
    isMe: true,
  },
  {
    sender: {
      senderId: 1,
      name: '나',
      imagePath: '',
    },
    message: '소프트웨어학과입니다ㅎㅎ',
    date: '오후 06:20',
    isMe: true,
  },
];

export const chatListMocks = [
  {
    boardId: 1,
    roomImage: profileList,
    title:
      '소프트웨어학과 남자 3명 소프트웨어학과 남자 3명소프트웨어학과 남자 3명소프트웨어학과 남자 3명소프트웨어학과 남자 3명',
    message:
      'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    time: '오후 12:25',
    count: '26',
  },
  {
    boardId: 2,
    roomImage: profileList,
    title:
      '심리학과 여자 4명 심리학과 여자 4명 심리학과 여자 4명 심리학과 여자 4명 심리학과 여자 4명 심리학과 여자 4명',
    message: '언제가 좋을까요?',
    time: '오후 2:18',
    count: '38',
  },
  {
    boardId: 3,
    roomImage: profileList,
    title: '간호학과 여자 3명 간호학과 여자 3명',
    message: '안녕하세용',
    time: '오전 1:35',
    count: '5',
  },
  {
    boardId: 4,
    roomImage: profileList,
    title: '화학과 남자 3명',
    message: ':):D',
    time: '오전 3:05',
    count: '300+',
  },
];
