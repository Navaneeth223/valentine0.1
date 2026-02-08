export const THEMES = {
  pink: {
    name: 'Cute Pink',
    gradient: 'from-pink-200 via-rose-200 to-pink-300',
    accent: 'bg-valentine-pink',
    soft: 'bg-pink-100',
    ring: 'ring-pink-200',
    text: 'text-pink-700',
    background:
      'radial-gradient(circle at top, rgba(255, 255, 255, 0.6), rgba(255, 214, 231, 0.7)), linear-gradient(135deg, #ffd6e7 0%, #ff7ac8 45%, #ff4763 100%)'
  },
  red: {
    name: 'Romantic Red',
    gradient: 'from-rose-200 via-red-200 to-rose-300',
    accent: 'bg-valentine-red',
    soft: 'bg-rose-100',
    ring: 'ring-rose-200',
    text: 'text-rose-700',
    background:
      'radial-gradient(circle at top, rgba(255, 255, 255, 0.5), rgba(255, 205, 214, 0.7)), linear-gradient(135deg, #ffd1d8 0%, #ff6b7d 48%, #ff3b3b 100%)'
  },
  pastel: {
    name: 'Soft Pastel',
    gradient: 'from-pink-100 via-purple-100 to-rose-100',
    accent: 'bg-pink-400',
    soft: 'bg-purple-100',
    ring: 'ring-purple-200',
    text: 'text-purple-700',
    background:
      'radial-gradient(circle at top, rgba(255, 255, 255, 0.65), rgba(230, 214, 255, 0.7)), linear-gradient(135deg, #ffe8f5 0%, #d9c7ff 48%, #ffb3d9 100%)'
  }
};

export const EMOJIS = ['??', '??', '??', '??', '??', '??'];

export const safeParam = (value, fallback) => {
  if (!value || typeof value !== 'string') return fallback;
  try {
    return decodeURIComponent(value);
  } catch {
    return fallback;
  }
};

export const getTheme = (themeKey = 'pink') => THEMES[themeKey] || THEMES.pink;

export const getValentineParams = (searchParams) => {
  const from = safeParam(searchParams.get('from'), 'Someone');
  const to = safeParam(searchParams.get('to'), 'You');
  const emoji = safeParam(searchParams.get('emoji'), '??');
  const theme = safeParam(searchParams.get('theme'), 'pink');
  const img = safeParam(searchParams.get('img'), '');
  return { from, to, emoji, theme, img };
};

export const storeImage = (base64) => {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  localStorage.setItem(`valentine_img_${id}`, base64);
  return id;
};

export const loadImage = (id) => {
  if (!id) return '';
  return localStorage.getItem(`valentine_img_${id}`) || '';
};
