import client from './connect';

const subscribe = client.subscribe('/queue/test', (res) => {
  console.log(res);
});

export default subscribe;
