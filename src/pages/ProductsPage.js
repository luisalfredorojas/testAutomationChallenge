const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryList = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.burgerMenuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    // Botón específico para agregar producto al carrito (ej. Sauce Labs Backpack)
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async validateOnPage() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryList).toBeVisible();
  }

  async addItemToCart() {
    await this.addToCartBackpack.click();
  }

  async getCartCount() {
    return await this.cartBadge.innerText();
  }

  async logout() {
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { ProductsPage };
