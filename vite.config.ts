import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import queryLoader from './query-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), queryLoader()],
})
