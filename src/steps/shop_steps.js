const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

Given('I am on the SauceDemo login page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I login with {string} and {string}', async function (username, password) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I should see the products page', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.validateOnPage();
});

When('I add an item to the cart', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.addItemToCart();
});

Then('the cart badge should display {string}', async function (count) {
  const productsPage = new ProductsPage(this.page);
  const badgeText = await productsPage.getCartCount();
  expect(badgeText).toBe(count);
});

When('I logout', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.logout();
});

Then('I should see the login page', async function () {
   // Validar que estamos de vuelta en la página de login (ej. verificar que el botón de login sea visible)
   const loginPage = new LoginPage(this.page);
   await expect(loginPage.loginButton).toBeVisible();
});
