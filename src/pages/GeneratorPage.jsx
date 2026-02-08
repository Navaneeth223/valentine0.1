import { useMemo, useState } from 'react';
import { EMOJIS, THEMES, storeImage } from '../utils/valentine.js';
import PreviewCard from '../components/PreviewCard.jsx';
import Toast from '../components/Toast.jsx';
import HeartEffect from '../components/HeartEffect.jsx';

export default function GeneratorPage() {
  const [fromName, setFromName] = useState('');
  const [toName, setToName] = useState('');
  const [emoji, setEmoji] = useState('💖');
  const [themeKey, setThemeKey] = useState('pink');
  const [image, setImage] = useState('');
  const [imageId, setImageId] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [toast, setToast] = useState(false);

  const previewImage = useMemo(() => image, [image]);

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result?.toString() || '');
      setImageId('');
    };
    reader.readAsDataURL(file);
  };

  const buildUrl = () => {
    const params = new URLSearchParams();
    if (fromName.trim()) params.set('from', fromName.trim());
    if (toName.trim()) params.set('to', toName.trim());
    if (emoji) params.set('emoji', emoji);
    if (themeKey) params.set('theme', themeKey);
    if (image) {
      let id = imageId;
      if (!id) {
        id = storeImage(image);
        setImageId(id);
      }
      params.set('img', id);
    }

    const path = `/valentine?${params.toString()}`;
    const fullUrl = `${window.location.origin}${path}`;
    setGeneratedUrl(fullUrl);
    return fullUrl;
  };

  const copyToClipboard = async () => {
    const url = buildUrl();
    await navigator.clipboard.writeText(url);
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  };

  return (
    <div className="min-h-[100svh] bg-valentine-cream">
      <HeartEffect />
      <Toast message="Link copied 💖" show={toast} />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 pt-8 md:flex-row md:items-start md:px-10">
        <div className="flex-1">
          <div className="mb-6 rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-rose-100">
            <h1 className="text-3xl font-display text-valentine-ink md:text-4xl">Valentine Link Generator</h1>
            <p className="mt-2 text-sm text-rose-500">
              Craft a personalized surprise with hearts, flowers, and playful interactions.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-rose-100">
            <label className="grid gap-2 text-sm font-semibold text-rose-600">
              Your Name
              <input
                value={fromName}
                onChange={(event) => setFromName(event.target.value)}
                placeholder="Romeo"
                className="rounded-2xl border-rose-200 bg-white px-4 py-3 text-base shadow-sm focus:border-rose-400 focus:ring-rose-300"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-rose-600">
              Partner Name
              <input
                value={toName}
                onChange={(event) => setToName(event.target.value)}
                placeholder="Juliet"
                className="rounded-2xl border-rose-200 bg-white px-4 py-3 text-base shadow-sm focus:border-rose-400 focus:ring-rose-300"
              />
            </label>

            <div className="grid gap-3">
              <p className="text-sm font-semibold text-rose-600">Choose an emoji</p>
              <div className="flex flex-wrap gap-3">
                {EMOJIS.map((item) => (
                  <button
                    key={item}
                    onClick={() => setEmoji(item)}
                    className={`rounded-2xl px-4 py-2 text-xl transition ${
                      emoji === item
                        ? 'bg-rose-500 text-white shadow-glow'
                        : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <p className="text-sm font-semibold text-rose-600">Theme</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {Object.entries(THEMES).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => setThemeKey(key)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ring-1 ${
                      themeKey === key
                        ? 'bg-rose-500 text-white ring-rose-400 shadow-glow'
                        : 'bg-white text-rose-600 ring-rose-100'
                    }`}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <p className="text-sm font-semibold text-rose-600">Optional image upload</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="block w-full text-sm text-rose-500 file:mr-4 file:rounded-full file:border-0 file:bg-rose-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-rose-600"
              />
            </div>

            {generatedUrl ? (
              <div className="grid gap-3 rounded-2xl bg-rose-50 p-4 text-sm text-rose-600">
                <p className="font-semibold">Your shareable link</p>
                <p className="break-all text-xs text-rose-500">{generatedUrl}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex-1">
          <div className="sticky top-6 grid gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold text-rose-600">Live preview</p>
              <PreviewCard
                fromName={fromName}
                toName={toName}
                emoji={emoji}
                themeKey={themeKey}
                image={previewImage}
              />
            </div>

            <div className="grid gap-3 rounded-3xl bg-white/80 p-5 shadow-xl ring-1 ring-rose-100">
              <button
                onClick={buildUrl}
                className="rounded-full bg-rose-500 px-5 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Generate Link
              </button>
              <button
                onClick={copyToClipboard}
                className="rounded-full border border-rose-200 bg-white/80 px-5 py-3 text-base font-semibold text-rose-600 shadow-sm transition hover:-translate-y-0.5"
              >
                Copy to clipboard
              </button>
              <p className="text-xs text-rose-400">
                Tip: Share the link on WhatsApp or Instagram for instant magic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 z-30 w-[90%] -translate-x-1/2 md:hidden">
        <button
          onClick={copyToClipboard}
          className="w-full rounded-full bg-rose-500 px-5 py-4 text-base font-semibold text-white shadow-glow"
        >
          Generate & Copy Link
        </button>
      </div>
    </div>
  );
}
