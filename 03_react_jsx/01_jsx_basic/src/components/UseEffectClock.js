import { useEffect, useState } from 'react';

export default function UseEffectClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }, []);

  return <p>Current Time: {time}</p>;
}