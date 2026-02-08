import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ message, show }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-rose-600 shadow-lg"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
