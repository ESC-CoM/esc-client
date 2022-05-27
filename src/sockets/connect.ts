import SockJS from 'sockjs-client';
import { IFrame, Stomp } from '@stomp/stompjs';

const sockJS = new SockJS('http://localhost:8080/webSocket');
const client = Stomp.over(sockJS);

client.reconnectDelay = 300;

client.onConnect = (frame: IFrame) => {
  console.log('f', frame);
  const subscription = client.subscribe('/queue/test', (message) => {
    if (message.body) console.log(message.body);
  });
};

client.onStompError = (frame: IFrame) => {
  console.log('Broker reported error: ' + frame.headers['message']);
  console.log('Additional details: ' + frame.body);
};

client.activate();

export default client;
