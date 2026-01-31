const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;
let context;
let page;

BeforeAll(async function () {
  // Si la variable de entorno HEADLESS es 'false', se ejecuta en modo headed (visible)
  const headless = process.env.HEADLESS !== 'false';
  browser = await chromium.launch({ headless: headless });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // Adjuntar página al contexto "World" de Cucumber
});

After(async function () {
  await page.close();
  await context.close();
});
