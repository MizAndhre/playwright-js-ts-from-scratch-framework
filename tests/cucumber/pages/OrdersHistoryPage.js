

export class OrderHistoryPage {
	constructor(page) {
		this.title = page.locator('h1');
		this.tableHeader = page.locator('th');
		this.allRows = page.locator('tbody tr');
	}

	getOrderIdRow(orderId) {
		return this.tableHeader.filter({ hasText: orderId });
	}

	async searchOrderClickViewDetails(orderId) {
		const allRowsCount = await this.allRows.count();

		for (let i = 0; i < allRowsCount; i++) {
			let row = this.allRows.nth(i).locator('th');
			let rowOrderId = await row.textContent();

			if (orderId.includes(rowOrderId)) {
				await this.allRows.nth(i).getByRole('button', { name: 'View' }).click();
				break;
			}
		}
	}
}
