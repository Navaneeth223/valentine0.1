import { useEffect, useState } from 'react';

export default function TypingMessage({ text, speed = 35 }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplay('');

    const interval = setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="mt-4 min-h-[3rem] text-center text-sm text-rose-600">
      {display}
      <span className="animate-pulse">|</span>
    </p>
  );
}
