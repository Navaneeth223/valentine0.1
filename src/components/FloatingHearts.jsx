import { useMemo } from 'react';

const FLOATERS = Array.from({ length: 14 }, (_, index) => index);

export default function FloatingHearts() {
  const hearts = useMemo(
    () =>
      FLOATERS.map((id) => ({
        id,
        left: Math.random() * 100,
        size: 16 + Math.random() * 24,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-white/70 animate-floaty"
          style={{
            left: `${heart.left}%`,
            top: `${heart.left / 2}%`,
            fontSize: heart.size,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        >
          ??
        </span>
      ))}
    </div>
  );
}
