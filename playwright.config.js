// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// Configuración principal para Playwright
module.exports = defineConfig({
  testDir: './tests', // No se usa para Cucumber, pero es bueno tenerlo
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'on',
    headless: true, // Establecer en false para ver el navegador
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
