import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default () => {
  // process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
      plugins: [react()],

      server: {
          port: 5433,
          host: true,
      },
  });
}