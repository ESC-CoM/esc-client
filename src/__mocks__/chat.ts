import { profileList } from './mutiProfile';

export const messageInfoMocks = [
  {
    sender: {
      id: 'loginid',
      name: '나',
      imagePath: '',
    },
    content: '1',
    date: '오후 05:15',
  },
  {
    sender: {
      id: 'other',
      name: '프렌즈1',
      imagePath:
        'https://cphoto.asiae.co.kr/listimglink/6/2022022115112252412_1645423882.png',
    },
    content: '반가워요~',
    date: '오후 05:16',
  },
  {
    sender: {
      id: 'other',
      name: '프렌즈2',
      imagePath:
        'https://media.bunjang.co.kr/product/166788639_1_1634025108_w360.jpg',
    },
    content: '어느 과이신가요?',
    date: '오후 05:16',
  },
  {
    sender: {
      id: 'other',
      name: '프렌즈3',
      imagePath:
        'https://data.ygosu.com/editor/attach/20180420/20180420132150_dovqlksp.jpg',
    },
    content:
      '어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?',
    date: '오후 06:20',
  },
  {
    sender: { id: 'loginid', name: '나', imagePath: '' },
    content: '안녕하세요안녕하세요안녕하세요안녕하세요',
    date: '오전 09:15',
  },
  {
    sender: {
      id: 'loginid',
      name: '나',
      imagePath: '',
    },
    content:
      '어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?어느 과이신가요?',
    date: '오후 06:20',
  },
];

export const chatListMocks = [
  {
    roomImage: profileList,
    title: '소프트웨어학과 남자 3명',
    content: '언제가 좋을까요?',
    time: '오후 12:25',
    count: '6',
  },
  {
    roomImage: profileList,
    title: '심리학과 남자 4명',
    content:
      'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    time: '오후 2:18',
    count: '23',
  },
  {
    roomImage: profileList.slice(1).reverse(),
    title: '간호학과 남자 2명',
    content: '안녕하세용',
    time: '오전 1:35',
    count: '5',
  },
  {
    roomImage: profileList.reverse(),
    title: '화학과 남자 3명',
    content: '우와 :)',
    time: '오전 3:05',
    count: '300+',
  },
];
