import { getTheme } from '../utils/valentine.js';

export default function PreviewCard({ fromName, toName, emoji, themeKey, image }) {
  const theme = getTheme(themeKey);

  return (
    <div className={`rounded-3xl p-6 shadow-xl ring-1 ${theme.ring} bg-white/70 backdrop-blur`}> 
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.soft} ${theme.text}`}>
          {theme.name}
        </span>
        <span className="text-xl">{emoji}</span>
      </div>
      <div className="mt-4">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-400">Preview</p>
        <h3 className="mt-2 text-2xl font-display text-valentine-ink">
          Hey {toName || 'Your Person'} {emoji}
        </h3>
        <p className="mt-2 text-sm text-valentine-ink/70">
          {fromName || 'You'} has something to ask you…
        </p>
      </div>
      {image ? (
        <div className="mt-4 overflow-hidden rounded-2xl">
          <img src={image} alt="Preview" className="h-40 w-full object-cover" />
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-rose-200 bg-white/60 p-5 text-center text-sm text-rose-400">
          Upload a photo to make it extra special
        </div>
      )}
      <div className="mt-5 flex items-center justify-between">
        <button className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-glow">
          Will you be my Valentine?
        </button>
        <span className="text-xs text-rose-400">Interactive</span>
      </div>
    </div>
  );
}
