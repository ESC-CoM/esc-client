import client from './connect';

const receiveMessage = () => {
  try {
    const subscription = client.subscribe('/queue/test', (message) => {
      if (message.body) console.log(message.body);
    });
    subscription.unsubscribe();
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export default receiveMessage;
