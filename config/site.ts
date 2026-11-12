// Everything on the page comes from this file.
export const site = {
  name: 'JrNova',
  accent: 'EX',
  handle: '@JrNovaEX',
  avatar: '/avatar.png',
  tagline: 'Faceless by choice.',
  bio: [
    'Names are just handles, and handles are just doors.',
    'Everything I make is built with intent.'
  ],
  // The API sends a Tailwind palette name; map it to the dot color here.
  statusColors: {
    green: '#22c55e',
    amber: '#f59e0b',
    blue: '#3b82f6',
    pink: '#ec4899',
    emerald: '#10b981',
    red: '#ef4444',
    violet: '#8b5cf6'
  } as Record<string, string>,
  links: [
    { label: 'Telegram', handle: '@jrnovaexbot', desc: 'Chat with me on Telegram', url: 'https://t.me/jrnovaexbot' },
    { label: 'TikTok', handle: '@jrnovaex', url: 'https://www.tiktok.com/@jrnovaex' },
    { label: 'dev-null', handle: '@JrNovaEX', url: 'https://dev-null.sh/@JrNovaEX' },
    { label: 'GitHub', handle: 'JrNovaEX', url: 'https://github.com/JrNovaEX/' },
    { label: 'X', handle: '@JrNovaEX', url: 'https://x.com/JrNovaEX' },
    { label: 'Reddit', handle: 'u/JrNovaEX', url: 'https://www.reddit.com/u/JrNovaEX/' },
    { label: 'Website', handle: 'jrnovaex.vercel.app', url: 'https://jrnovaex.vercel.app' }
  ],
  spotify: { id: '1DX4GKU5IWQLcbuxspf0YJ', title: 'On Repeat', note: 'The soundtrack to everything.' }
}
