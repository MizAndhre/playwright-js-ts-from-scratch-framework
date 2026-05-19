import { Locator, Page } from '@playwright/test';

export class CartPage {
	checkoutButton: Locator;
	constructor(page: Page) {
		this.checkoutButton = page.getByText('Checkout', { exact: true });
	}

	async goToCheckout() {
		await this.checkoutButton.click();
	}
}
