import StompJs from '@stomp/stompjs';

export const socketClient = new StompJs.Client({
  brokerURL: 'ws://localhost:8080/ws-stomp',
  connectHeaders: {
    login: 'user',
    passcode: 'password',
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 200,
});

socketClient.onConnect = (frame) => {
  console.log(frame);
};

socketClient.onStompError = (frame) => {
  console.log(frame.headers['message']);
};

socketClient.activate();

export default socketClient;
