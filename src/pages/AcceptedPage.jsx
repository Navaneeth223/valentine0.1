import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import HeartEffect from '../components/HeartEffect.jsx';
import TypingMessage from '../components/TypingMessage.jsx';
import ShareButton from '../components/ShareButton.jsx';
import useLocalImage from '../hooks/useLocalImage.js';
import { getValentineParams } from '../utils/valentine.js';

export default function AcceptedPage() {
  const [searchParams] = useSearchParams();
  const { from, to, img } = getValentineParams(searchParams);
  const image = useLocalImage(img);
  const navigate = useNavigate();

  const shareUrl = useMemo(() => {
    return `${window.location.origin}/valentine${window.location.search}`;
  }, []);

  return (
    <div className="relative min-h-[100svh] bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 px-4 py-12">
      <HeartEffect />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <div className="rounded-3xl bg-white/80 p-8 text-center shadow-xl ring-1 ring-rose-100">
          <div className="mx-auto flex h-40 w-40 items-center justify-center">
            <div className="bloom-heart" />
          </div>
          <h1 className="mt-6 text-3xl font-display text-rose-600 md:text-4xl">
            {to} said YES to {from}! ??
          </h1>
          <TypingMessage text="This is your cute little love story unfolding in sparkles." />
        </div>

        {image ? (
          <div className="w-full max-w-xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-rose-100">
            <img src={image} alt="Special moment" className="h-64 w-full object-cover" />
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate(`/valentine${window.location.search}`)}
            className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Replay
          </button>
          <ShareButton url={shareUrl} />
        </div>
      </div>
    </div>
  );
}
