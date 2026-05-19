import { Locator, Page } from '@playwright/test';

export class OrderPage {
	title: Locator;
	orderId: Locator;
	ordersHistoryButton: Locator;

	constructor(page: Page) {
		this.title = page.locator('h1.hero-primary');
		this.orderId = page.locator('.em-spacer-1 .ng-star-inserted');
		this.ordersHistoryButton = page.getByText('ORDERS', { exact: true });
	}

	async getOrderId() {
		// const orderId = (await this.orderId.textContent()) || ''; // add empty string to avoid null
		const orderId: any = await this.orderId.textContent(); // add any to avoid null
		const orderIdUpd = orderId.replace(/\|/g, '').trim();
		console.log(orderId, orderIdUpd);

		return orderIdUpd;
	}

	async goToOrdersHistory() {
		await this.ordersHistoryButton.first().click();
	}
}
