import client from './connect';

const sendMessage = (message: string) => {
  try {
    client.publish({
      destination: '/topic/general',
      body: message,
      skipContentLengthHeader: true,
    });
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export default sendMessage;
