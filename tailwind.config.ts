import { Config } from 'tailwindcss'
import {generateConfig} from './lib/theme/config'
import {defaultTheme} from './lib/theme/preset'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}','./lib/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {},
  plugins: [generateConfig(defaultTheme)],
} satisfies Config

