import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), AutoImport({
    imports: [
      'react',
    ],
    dts: true,
  })],
})
