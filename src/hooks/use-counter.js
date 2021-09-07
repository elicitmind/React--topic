import { useEffect, useState } from 'react';

const useCounter = (arg) => {
  const [counter, setCounter] = useState(0);
	
  let type;

  if (arg === 1) {
    type = 'add: ';
  }
  if (arg === 0) {
    type = 'sub: ';
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (arg === 1) {
        setCounter((prevValue) => prevValue + 1);
      } else if (arg === 0) {
        setCounter((prevValue) => prevValue - 1);
      } else {
        setCounter('fn accept 1 or 0 for arguments');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [arg]);

  return type + counter;
};

export default useCounter;
