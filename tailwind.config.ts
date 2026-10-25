import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  theme: { extend: {
    colors: { ink: '#0a0907', paper: '#f1ebe0', ember: '#ff6a3d' },
    fontFamily: {
      display: ['"Instrument Serif"', 'Georgia', 'serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      sans: ['Inter', 'system-ui', 'sans-serif']
    }
  } }
}
