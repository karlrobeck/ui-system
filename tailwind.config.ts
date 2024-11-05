import { type Config } from 'tailwindcss'
import {generateConfig} from './src/lib/theme/config.ts'
import {defaultTheme} from './src/lib/theme/preset.ts'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}','./lib/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {},
  plugins: [generateConfig(defaultTheme)],
} satisfies Config

