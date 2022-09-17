import { useEffect, useState } from 'react';

import { debounce } from '../lib/debounce';

export default function useWindowResize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const detectSize = () => setSize([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => detectSize(), 100)
    );

    return () =>
      window.removeEventListener(
        'resize',
        debounce(() => detectSize(), 100)
      );
  }, []);
  return size;
}
