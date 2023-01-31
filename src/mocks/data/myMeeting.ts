const registerMeetingMocks = [
  {
    id: 1,
    kind: '과팅',
    title: '공대, 전정대 여자 3명이랑 과팅 ㄱㄱㄱㄱㄱㄱ~~~~~~~~~~~~',
    content:
      '같이 과팅할 남자 3명 구해요~ 같은 공대, 전정대는 아니였으면 좋겠어요ㅎㅎ',
    friends: [
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515848-004cc95e-647d-429b-969e-9dc30cbfe5ee.jpeg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515923-034f559f-d1e1-4665-a735-a5df086375ec.jpeg',
      },
    ],
    date: '1시간 전',
  },
  {
    id: 2,
    kind: '미팅',
    title: '전정대+공대 여자 2명이랑 과팅해용',
    content: '같이 과팅할 남자 2명 구합니당 해 뜰때까지 놀아요^ㅡ^',
    friends: [
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515923-034f559f-d1e1-4665-a735-a5df086375ec.jpeg',
      },
    ],
    date: '7일전',
  },
  {
    id: 3,
    kind: '과팅',
    title: '전정대랑 경영대 여자 2명 과팅올려요',
    content: '과팅해요 저희 재밌어요',
    friends: [
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickName: '',
        src: 'https://cphoto.asiae.co.kr/listimglink/6/2022022115112252412_1645423882.png',
      },
    ],
    date: '22.10.10',
  },
  {
    id: 4,
    kind: '미팅',
    title: '자연대, 전정대, 인문대 3:3 골고루 과팅해요',
    content: '분위기 메이커들만 모였어요 😜',
    friends: [
      {
        nickName: '',
        src: 'https://media.bunjang.co.kr/product/166788639_1_1634025108_w360.jpg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515848-004cc95e-647d-429b-969e-9dc30cbfe5ee.jpeg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
    ],
    date: '22.09.03',
  },
  {
    id: 5,
    kind: '과팅',
    title: '저희 3:3 과팅해요',
    content: '모든 신청 환영',
    friends: [
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202516493-f395c20e-1794-4b10-a963-fc37fc3f4b38.jpeg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515848-004cc95e-647d-429b-969e-9dc30cbfe5ee.jpeg',
      },
    ],
    date: '22.09.02',
  },
  {
    id: 6,
    kind: '미팅',
    title: '전정대 여자 단체 과팅 올려요~',
    content: '아무나 과팅 고고',
    friends: [
      {
        nickName: '',
        src: 'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickName: '',
        src: 'https://cphoto.asiae.co.kr/listimglink/6/2022022115112252412_1645423882.png',
      },
      {
        nickName: '',
        src: 'https://data.ygosu.com/editor/attach/20180420/20180420132150_dovqlksp.jpg',
      },
    ],
    date: '22.09.02',
  },
];

const requestListForMeetingRegisteredMocks = [
  {
    requestBoardId: 7,
    title: '공대 남자 3명 신청해요',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://www.fnnews.com/resource/media/image/2022/05/13/202205130719128261_l.jpg',
      },
      {
        nickname: '라이언',
        profileImage:
          'http://cdn.ksilbo.co.kr/news/photo/201911/736241_408290_1458.jpg',
      },
      {
        nickname: '라이언',
        profileImage:
          'http://cdn.ggilbo.com/news/photo/202110/873065_702693_2620.jpg',
      },
    ],
    updatedAt: '27초 전',
  },
  {
    requestBoardId: 8,
    title: '사범대 3명 신청합니당',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMjdfMzMg%2FMDAxNTcyMTczNDAwMjc0.-zTktpIp7v4OuhrkU2OLCmR1yxPqTFTTQ3NMHoz9-Csg.x04PhKOmPSawfE07xN5uBlURiDdeHcIZ4i73gp7wB7Ug.JPEG.lucy3622%2F1572173398894.jpg&type=sc960_832',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://www.fnnews.com/resource/media/image/2022/05/13/202205130719128261_l.jpg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://img.mbn.co.kr/filewww/news/other/2019/12/30/015331923331.jpg',
      },
    ],
    updatedAt: '27초 전',
  },
  {
    requestBoardId: 9,
    title: '공대도 받아주세요ㅠㅠ~~~~~~~~~~~~',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202517078-aa180ee7-0963-4221-9742-c377f91e2314.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202516959-9af74ecb-ae3b-4e4d-a33e-f8ba2b9716fd.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'http://cdn.ggilbo.com/news/photo/202110/873065_702693_2620.jpg',
      },
    ],
    updatedAt: '27초 전',
  },
  {
    requestBoardId: 10,
    title: '안녕하세요 자연대 3명입니다',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://news.nateimg.co.kr/orgImg/hr/2021/09/03/20210903000001_0.jpg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202517053-8d644d92-e90d-4c5b-bb9a-216e3ea8e05e.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl1sYM3S2FJ9PuoP1xRUCaneazva2jdxjYA&usqp=CAU',
      },
    ],
    updatedAt: '27초 전',
  },
  {
    requestBoardId: 11,
    title: '저희 술 잘 먹어요 ㅎㅎ',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTNfMTY3%2FMDAxNjI4ODQ4NzE0OTIw.aYZUZKIBMCo2p8iHi3OEeeWFnqEjWcUxkYXgGZOVCz4g.cHSgQ4Foa9exYJKS39pxM6ZFWjRKAo_Qe1wSvNTvbMYg.JPEG.oyeonwol0311%2FIMG%25A3%25DF1395%25A3%25DFpolarr.jpg&type=sc960_832',
      },
      {
        nickname: '라이언',
        profileImage:
          'http://cdn.ksilbo.co.kr/news/photo/201911/736241_408290_1458.jpg',
      },
    ],
    updatedAt: '30분 전',
  },
];

const requestMeetingMocks = [
  {
    boardId: 12,
    title: '전정대, 인문대 2명 신청합니다 😆',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515923-034f559f-d1e1-4665-a735-a5df086375ec.jpeg',
      },
    ],
    updatedAt: '52분 전',
    participantStatus: 'PENDING',
  },
  {
    boardId: 13,
    title: '전정대 2, 공대 1 과팅 하실래요?',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://data.ygosu.com/editor/attach/20180420/20180420132150_dovqlksp.jpg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'http://cdn.ggilbo.com/news/photo/202110/873065_702693_2620.jpg',
      },
    ],
    updatedAt: '2일전',
    participantStatus: 'ALLOWED',
  },
  {
    boardId: 14,
    title: '자연대, 전정대, 인문대 3명이랑 과팅해요🐹',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202516493-f395c20e-1794-4b10-a963-fc37fc3f4b38.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515923-034f559f-d1e1-4665-a735-a5df086375ec.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
    ],
    updatedAt: '22.11.18',
    participantStatus: 'REJECTED',
  },
  {
    boardId: 15,
    title: '안녕하세요 저희 전정대 2명인데 과팅 신청해요~',
    requestParticipants: [
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515813-d44a8ec7-ebb6-4575-99c9-e94d88f85074.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202515848-004cc95e-647d-429b-969e-9dc30cbfe5ee.jpeg',
      },
      {
        nickname: '라이언',
        profileImage:
          'https://user-images.githubusercontent.com/63364990/202516493-f395c20e-1794-4b10-a963-fc37fc3f4b38.jpeg',
      },
    ],
    updatedAt: '22.09.11',
    participantStatus: 'ALLOWED',
  },
];

export {
  registerMeetingMocks,
  requestListForMeetingRegisteredMocks,
  requestMeetingMocks,
};
