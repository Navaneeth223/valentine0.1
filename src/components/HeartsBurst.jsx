import { motion } from 'framer-motion';

const HEARTS = ['??', '??', '??', '??'];

export default function HeartsBurst({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {Array.from({ length: 18 }).map((_, index) => {
        const x = (Math.random() - 0.5) * 260;
        const y = (Math.random() - 0.5) * 260;
        const delay = Math.random() * 0.2;
        const size = 18 + Math.random() * 20;
        const emoji = HEARTS[Math.floor(Math.random() * HEARTS.length)];

        return (
          <motion.span
            key={index}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 1.1], x, y }}
            transition={{ duration: 0.9, delay, ease: 'easeOut' }}
            style={{ fontSize: size }}
          >
            {emoji}
          </motion.span>
        );
      })}
    </div>
  );
}
