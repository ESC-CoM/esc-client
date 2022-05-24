import client from './connect';

const publish = client.publish({
  destination: '/topic/general',
  body: 'Hello world',
  headers: { priority: '9' },
});

export default publish;
