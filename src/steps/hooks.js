const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;
let context;
let page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true }); // Leer de la configuración idealmente, pero hardcodeado por simplicidad aquí
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
