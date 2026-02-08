import { useState } from 'react';
import Toast from './Toast.jsx';

export default function ShareButton({ url, label = 'Share this link' }) {
  const [toast, setToast] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Valentine Surprise ??',
          url
        });
        return;
      } catch {
        // fall back to clipboard
      }
    }

    await navigator.clipboard.writeText(url);
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="rounded-full border border-rose-200 bg-white/70 px-5 py-2 text-sm font-semibold text-rose-600 shadow-sm transition hover:-translate-y-0.5"
      >
        {label}
      </button>
      <Toast message="Link copied ??" show={toast} />
    </>
  );
}
