import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { univerPlugin } from '@univerjs/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), univerPlugin()],
})
