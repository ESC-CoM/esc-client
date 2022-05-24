import { Client, IFrame } from '@stomp/stompjs';

const client = new Client({
  brokerURL: 'ws://local.corsmarket.ml/api/ws',
  connectHeaders: {
    login: 'user',
    passcode: 'password',
  },
  debug: (str: string) => {
    console.log(str);
  },
  reconnectDelay: 5000, //자동 재 연결
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

client.onConnect = (frame: IFrame) => {
  console.log(frame);
};

client.onStompError = (frame: IFrame) => {
  console.log('Broker reported error: ' + frame.headers['message']);
  console.log('Additional details: ' + frame.body);
};

client.activate();

export default client;
