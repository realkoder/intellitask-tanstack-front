// app.config.ts
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Create dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare module '@tanstack/react-start/config' {
  interface ServerOptions {
    allowedHosts?: string[];
  }
}

export default defineConfig({
  server: {
    _config: {

    }
  },
  tsr: {
    appDirectory: 'app',
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],

    resolve: {
      alias: {
        '~encore': path.resolve(__dirname, './encore.gen'),
      },
    },
  },
});
