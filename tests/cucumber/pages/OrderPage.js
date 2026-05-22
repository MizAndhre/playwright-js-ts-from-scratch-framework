

export class OrderPage {
	constructor(page) {
		this.title = page.locator('h1.hero-primary');
		this.orderId = page.locator('.em-spacer-1 .ng-star-inserted');
		this.ordersHistoryButton = page.getByText('ORDERS', { exact: true });
	}

	async getOrderId() {
		const orderId = await this.orderId.textContent();
		const orderIdUpd = orderId.replace(/\|/g, '').trim();
		console.log(orderId, orderIdUpd);

		return orderIdUpd;
	}

	async goToOrdersHistory() {
		await this.ordersHistoryButton.first().click();
	}
}
