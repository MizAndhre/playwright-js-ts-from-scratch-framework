import { Locator, Page } from '@playwright/test';

export class DashboardPage {
	private readonly products: Locator;
	private readonly productsText: Locator;
	private readonly cart: Locator;

	constructor(page: Page) {
		this.products = page.locator('.card-body');
		this.productsText = page.locator('.card-body b');
		this.cart = page.locator('[routerlink="/dashboard/cart"]');
	}

	async waitLoading() {
		await this.products.first().waitFor();
	}

	async getRandomProduct() {
		const allProductsText = await this.productsText.allTextContents();
		// use a math random and max floor  function and store the info in productName
		const randomIndex = Math.floor(Math.random() * allProductsText.length);
		const randomProduct = allProductsText[randomIndex];
		console.log('Selected random product', randomProduct);
		return randomProduct;
	}

	async searchProductAddToCart(randomProduct: string) {
		// const randomProduct = this.getRandomProduct()

		const productsCount = await this.products.count();
		for (let i = 0; i < productsCount; i++) {
			let product = await this.products.nth(i).locator('b').textContent();
			if (product === randomProduct) {
				// add product to cart
				await this.products.nth(i).getByText('Add To Cart').click();
				break;
			}
		}
	}

	async navigateToCart() {
		await this.cart.click();
	}
}
