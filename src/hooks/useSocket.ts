// import { useEffect, useRef } from 'react';
// import { io, Socket } from 'socket.io-client';
// import { API_SERVER_URL } from 'src/constants/env';

function useSocket(namespace: string) {
  // const socket = useRef<Socket>();
  // useEffect(() => {
  //   const ioSocket = io(`${API_SERVER_URL}${namespace}`);
  //   socket.current = ioSocket;
  //   return () => {
  //     if (socket.current) {
  //       socket.current.disconnect();
  //       socket.current = undefined;
  //     }
  //   };
  // }, [namespace]);
  // return socket.current;
}

export default useSocket;
