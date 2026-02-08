import { useEffect, useRef, useState } from 'react';

const HEARTS = ['??', '??', '??', '??', '??'];

export default function HeartEffect() {
  const [hearts, setHearts] = useState([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const spawn = (x, y) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < 40) return;
      lastSpawnRef.current = now;

      const size = 14 + Math.random() * 18;
      const id = `${now}-${Math.random().toString(36).slice(2, 6)}`;
      const item = {
        id,
        x,
        y,
        size,
        emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)]
      };
      setHearts((prev) => [...prev, item]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, 900);
    };

    const onMove = (event) => {
      spawn(event.clientX, event.clientY);
    };

    const onTouch = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      spawn(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchstart', onTouch, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onTouch);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-particle"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
