import { page } from '@playwright/test';

export class CartPage {
	constructor(page) {
		this.checkoutButton = page.getByText('Checkout', { exact: true });
	}

	async goToCheckout() {
		await this.checkoutButton.click();
	}
}
