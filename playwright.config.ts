import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    headless: true,
    screenshot: 'only-on-failure', // já tira screenshot no erro automaticamente
    video: 'retain-on-failure',
  },
  reporter: [
    ['html', { open: 'never' }]
  ],
});
