import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeartEffect from '../components/HeartEffect.jsx';
import FloatingHearts from '../components/FloatingHearts.jsx';
import HeartsBurst from '../components/HeartsBurst.jsx';
import { getTheme, getValentineParams } from '../utils/valentine.js';

export default function ValentinePage() {
  const [searchParams] = useSearchParams();
  const { from, to, emoji, theme } = getValentineParams(searchParams);
  const themeConfig = getTheme(theme);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [wiggle, setWiggle] = useState(false);
  const [burst, setBurst] = useState(false);

  const moveNoButton = () => {
    if (!containerRef.current || !buttonRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const btn = buttonRef.current.getBoundingClientRect();

    const maxX = Math.max(0, rect.width - btn.width - 16);
    const maxY = Math.max(0, rect.height - btn.height - 16);
    const nextX = Math.random() * maxX + 8;
    const nextY = Math.random() * maxY + 8;
    setNoPos({ x: nextX, y: nextY });
    setWiggle(true);
    setTimeout(() => setWiggle(false), 400);
  };

  useEffect(() => {
    if (!containerRef.current || !buttonRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const btn = buttonRef.current.getBoundingClientRect();
    setNoPos({
      x: rect.width / 2 + 30,
      y: rect.height / 2 + btn.height
    });
  }, []);

  const onYes = () => {
    setBurst(true);
    if (navigator.vibrate) navigator.vibrate(100);
    setTimeout(() => {
      navigate(`/accepted${window.location.search}`);
    }, 650);
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden text-white">
      <div
        className="absolute inset-0 valentine-gradient"
        style={{ background: themeConfig.background }}
      />
      <div className="absolute inset-0 noise-overlay opacity-30" />
      <FloatingHearts />
      <HeartEffect />
      <HeartsBurst show={burst} />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 py-12 text-center">
        <div className="rounded-3xl bg-white/15 p-8 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Valentine Special</p>
          <h1 className="mt-4 text-3xl font-display md:text-4xl">Hey {to} {emoji}</h1>
          <p className="mt-3 text-sm text-white/80">{from} has something to ask you…</p>
        </div>

        <div className="rounded-[32px] bg-white/15 p-6 shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-display md:text-3xl">Will you be my Valentine? ??</h2>
          <p className="mt-2 text-sm text-white/80">Choose wisely, cutie.</p>

          <div
            ref={containerRef}
            className="relative mt-8 h-[280px] w-[320px] rounded-3xl bg-white/10 p-4 md:h-[320px] md:w-[420px]"
          >
            <div className="absolute left-1/2 top-16 flex -translate-x-1/2 flex-col gap-3">
              <button
                onClick={onYes}
                className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-rose-500 shadow-glow transition hover:-translate-y-0.5"
              >
                YES {emoji}
              </button>
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Tap me</span>
            </div>

            <motion.button
              ref={buttonRef}
              animate={{ left: noPos.x, top: noPos.y }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className={`absolute rounded-full bg-black/20 px-4 py-2 text-sm font-semibold text-white shadow-lg transition ${
                wiggle ? 'no-button-wiggle' : ''
              }`}
            >
              NO ??
            </motion.button>
          </div>
        </div>

        <div className={`rounded-full px-4 py-2 text-xs font-semibold ${themeConfig.accent} text-white shadow-glow`}>
          Theme: {themeConfig.name}
        </div>
      </div>
    </div>
  );
}
